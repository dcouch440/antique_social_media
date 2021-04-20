const addToTable = require('../../lib/add-to-table')
const imageService = require('../../src/image/image.service');
const { cloudinary } = require('../../src/image/cloudinary.config');
const { randomUser, randomAntique, staticUser } = require('../../lib/seed-data');
const { hashPassword } = require('../../src/auth/auth.bcrypt');

exports.seed = async knex => {

  try
  {
    await knex.raw('TRUNCATE TABLE "user" CASCADE');
    await knex.raw('TRUNCATE TABLE antique CASCADE');
    await knex.raw('TRUNCATE TABLE "like" CASCADE');
    // await knex.raw('TRUNCATE TABLE "image" CASCADE');
    // await cloudinary.delete_resources();

    const ENV = process.env.NODE_ENV

    const users = ENV === 'test' ? 1 : 1;
    const antiques = ENV === 'test' ? 5 : 5;

    // static user for testing routes
    const staticUserHash = await hashPassword(staticUser());
    const static_user_id = await addToTable({table: 'user', obj: staticUserHash})

    for (let index = 0; index < users; index++)
    {
      const randomUserHash = await hashPassword(randomUser());
      const user_id = await addToTable({table: 'user', obj: randomUserHash})

      for (let index = 0; index < antiques; index++)
      {
        const antique_id = await addToTable({
          table: 'antique', obj: randomAntique(user_id)
        });

        await imageService.upload({
          fileStr: './db/seeds/seed-images/fairy.jpg',
          antique_id
        })

        await knex('like').insert({user_id, antique_id})

        await knex('like').insert({user_id: static_user_id, antique_id})
      }
    }

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
    `)
  }

  catch(err)
  {
    console.error(err)
  }

}