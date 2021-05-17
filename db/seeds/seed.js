const addToTable = require('./utils/add-to-table');
const imageService = require('../../src/image/image.service');
const devImageArray = require('./utils/mapped-image-data');
const testImageArray = require('./utils/test-mapped-image-data');
const { randomUser, randomAntique, staticUser } = require('../../lib/seed-data');
const { cleanupAvatarImages, cleanupAntiqueImages } = require('./utils/cleanup-cloudinary-images');
const avatarService = require('../../src/avatar/avatar.service');
const { hashPassword } = require('../../src/auth/auth.bcrypt');
const truncateTables = require('./utils/truncate-tables');
const times = require('./utils/times');
const faker = require('faker');

exports.seed = async knex => {
  try {
    // cleanup
    await cleanupAntiqueImages(knex);
    await cleanupAvatarImages(knex);
    await truncateTables(knex);
    const ENV = process.env.NODE_ENV;
    const imageArray = ENV === 'test' ? testImageArray : devImageArray;
    const amountOfImageFolders = imageArray.length;

    // static user for testing routes
    const staticUserHash = await hashPassword(staticUser());

    const static_user_id = await addToTable({
      table: 'user', obj: staticUserHash
    });

    await times(amountOfImageFolders)(async userIndex => {
      try {

        const user = imageArray[userIndex];
        const randomUserHash = await hashPassword(randomUser());
        const user_id = await addToTable({ table: 'user', obj: randomUserHash });
        await avatarService.upload({
          file64: faker.internet.avatar(),
          user_id
        });

        await times(user.length)(async antiqueIndex => {
          try {

            const antiqueImage = user[antiqueIndex];
            const antique_id = await addToTable({
              table: 'antique', obj: randomAntique(user_id)
            });
            await imageService.upload({
              file64: antiqueImage,
              antique_id
            });
            await knex('like').insert({
              user_id, antique_id, username: randomUserHash.username
            });
            await knex('like').insert({
              user_id: static_user_id, antique_id,
              username: staticUserHash.username
            });

          } catch (err) {
            console.error(err);
          }
        });

      } catch (err) {
        console.error(err);
      }
    });

    const [userCount] = await knex.from('user').count('id');
    const [antiquesCount] = await knex.from('antique').count('id');
    const [likesCount] = await knex.from('like').count('id');

    ENV !== 'test' && console.info(`
      ______________________________________________

        SEED:
          User Count:    - ${userCount.count}
          Antique Count: - ${antiquesCount.count}
          Like Count:    - ${likesCount.count}
          [ENV]:         - ${process.env.NODE_ENV}

      ______________________________________________

    `);
  } catch (err) {
    console.error(err);
  }
};