const addToTable = require('./utils/add-to-table');
const AntiqueImageService = require('../../src/antiqueImage/antiqueImage.service');
const devImageArray = require('./utils/mapped-image-data');
const testImageArray = require('./utils/test-mapped-image-data');
const { randomUser, randomAntique } = require('../../lib/seed-data');
// const { cleanupAntiqueImages } = require('./utils/cleanup-cloudinary-images');
const { hashPassword } = require('../../src/auth/auth.bcrypt');
// const truncateTables = require('./utils/truncate-tables');
const times = require('./utils/times');

exports.seed = async knex => {
  try {
    // cleanup
    // await cleanupAntiqueImages(knex);
    // await truncateTables(knex);
    const ENV = process.env.NODE_ENV;
    const imageArray = ENV === 'test' ? testImageArray : devImageArray;
    const amountOfImageFolders = imageArray.length;

    // static user for testing routes
    // const staticUserHash = await hashPassword(staticUser());

    // const static_user_id = await addToTable({
    //   table: 'user', obj: staticUserHash
    // });

    await times(amountOfImageFolders)(async userIndex => {
      try {

        const user = imageArray[userIndex];
        const randomUserHash = await hashPassword(randomUser());
        const user_id = await addToTable({ table: 'user', obj: randomUserHash });

        await times(user.length)(async antiqueIndex => {
          try {

            const antiqueImage = user[antiqueIndex];
            // create image
            const antique_id = await addToTable({
              table: 'antique', obj: randomAntique(user_id)
            });

            // upload image host
            const { public_id, height, width, secure_url } = await AntiqueImageService.upload({
              file64: antiqueImage,
            });

            await knex('antique_image').insert({
              public_id,
              antique_id,
              secure_url,
              width,
              height,
            });

            await knex('like').insert({
              user_id, antique_id,
            });
            // await knex('like').insert({
            //   user_id: static_user_id, antique_id,
            // });

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