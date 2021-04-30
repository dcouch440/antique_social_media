const addToTable = require('../../lib/add-to-table');
const imageService = require('../../src/image/image.service');
const { randomUser, randomAntique, staticUser } = require('../../lib/seed-data');
const { cleanupAvatarImages, cleanupAntiqueImages } = require('./utils/cleanup-cloudinary-images');
const avatarService = require('../../src/avatar/avatar.service');
const { hashPassword } = require('../../src/auth/auth.bcrypt');
const truncateTables = require('./utils/truncate-tables');
const times = require('./utils/times');

exports.seed = async knex => {

  try
  {
    // cleanup
    await cleanupAntiqueImages(knex);
    await cleanupAvatarImages(knex);
    await truncateTables(knex);

    const ENV = process.env.NODE_ENV;
    const users = ENV === 'test' ? 1 : 1;
    const antiques = ENV === 'test' ? 5 : 5;

    // static user for testing routes
    const staticUserHash = await hashPassword(staticUser());
    const static_user_id = await addToTable({
      table: 'user', obj: staticUserHash
    });


    await times(users)( async () => {

      const randomUserHash = await hashPassword(randomUser());
      const user_id = await addToTable({table: 'user', obj: randomUserHash});
      await avatarService.upload({
        file64: './db/seeds/seed-images/bottles.jpeg',
        user_id
      });

      await times(antiques)(async () => {

        const antique_id = await addToTable({
          table: 'antique', obj: randomAntique(user_id)
        });

        await imageService.upload({
          file64: './db/seeds/seed-images/wall.jpeg',
          antique_id
        });

        await knex('like').insert({
          user_id, antique_id, username: randomUserHash.username
        });

        await knex('like').insert({
          user_id: static_user_id, antique_id,
          username: staticUserHash.username
        });

      });

    });

    const [userCount] = await knex.from('user').count('id');
    const [antiquesCount] = await knex.from('antique').count('id');
    const [likesCount] = await knex.from('like').count('id');
    const [imageCount] = await knex.from('image').count('id');

    ENV !== 'test' && console.info(`
      ______________________________________________

        SEED:
          User Count:    - ${userCount.count}
          Antique Count: - ${antiquesCount.count}
          Like Count:    - ${likesCount.count}
          Image Count:    - ${imageCount.count}
          [ENV]:         - ${process.env.NODE_ENV}

      _____________________________________________
    `);
  }

  catch(err) { console.error(err); }

};