const addToTable = require('../../lib/add-to-table')
const {
  staticUser, randomUser, randomAntique
} = require('../../constant/seed-data');

exports.seed = async knex => {

  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE antique CASCADE');

  const users = 100;
  const antiques = 5;

  await addToTable({table: 'user', obj: staticUser()})

  for (let index = 0; index < users; index++)
  {
    const id = await addToTable({table: 'user', obj: randomUser()})

    for (let index = 0; index < antiques; index++)
    {
      await addToTable({table: 'antique', obj: randomAntique(id)});
    }
  }

  const [userCount] = await knex.from('user').count('id');
  const [antiquesCount] = await knex.from('antique').count('id');

  console.log(`
    ______________________________________________

      SEED:
        User Count: ${userCount.count}
        Antique Count: ${antiquesCount.count}

    _____________________________________________
  `)

}