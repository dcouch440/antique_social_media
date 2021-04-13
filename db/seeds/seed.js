const faker = require('faker');

exports.seed = async knex => {

  await knex.raw('TRUNCATE TABLE "user" CASCADE');
  await knex.raw('TRUNCATE TABLE antique CASCADE');

  const users = 25;
  const antiques = 5;

  for (let index = 0; index < users; index++){

    await knex('user').insert({
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password_digest: 'pass'
    }).returning('id')

    .then(async userId => {
      for (let i = 0; i < antiques; i++){

        await knex('antique').insert({
          name: faker.name.firstName(),
          year: faker.datatype.number({min: 900, max: 1900}),
          user_id: parseInt(userId)
        })

      }
    });

  }

}