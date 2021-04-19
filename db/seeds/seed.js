const addToTable = require('../../lib/add-to-table')
const { randomUser, randomAntique, staticUser } = require('../../lib/seed-data');
const { hashPassword } = require('../../src/auth/auth.bcrypt');

exports.seed = async knex => {

  try
  {
    await knex.raw('TRUNCATE TABLE "user" CASCADE');
    await knex.raw('TRUNCATE TABLE antique CASCADE');

    const ENV = process.env.NODE_ENV

    const users = ENV === 'test' ? 1 : 50;
    const antiques = ENV === 'test' ? 5 : 50;

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

        await knex('like').insert({user_id, antique_id})

        await knex('like').insert({user_id: static_user_id, antique_id})
      }
    }

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

      _____________________________________________
    `)
  }

  catch(err)
  {
    console.error(err)
  }

}