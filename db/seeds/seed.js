const addToTable = require('../../lib/add-to-table')
const {
  staticUser, randomUser, randomAntique
} = require('../../lib/seed-data');

const {hashPassword} = require('../../src/auth/auth.bcrypt');

exports.seed = async knex => {
  try
  {
    await knex.raw('TRUNCATE TABLE "user" CASCADE');
    await knex.raw('TRUNCATE TABLE antique CASCADE');

    const users = process.env.NODE_ENV === 'test' ? 1 : 50;
    const antiques = process.env.NODE_ENV === 'test' ? 5 : 50;

    for (let index = 0; index < users; index++)
    {
      const randomUserHash = await hashPassword(randomUser());
      const id = await addToTable({table: 'user', obj: randomUserHash})

      for (let index = 0; index < antiques; index++)
      {
        await addToTable({table: 'antique', obj: randomAntique(id)});
      }
    }

    const [userCount] = await knex.from('user').count('id');
    const [antiquesCount] = await knex.from('antique').count('id');

    // console.log(`
    //   ______________________________________________

    //     SEED:
    //       User Count: ${userCount.count}
    //       Antique Count: ${antiquesCount.count}

    //   _____________________________________________
    // `)
  }
  catch(err)
  {
    console.error(err)
  }
}