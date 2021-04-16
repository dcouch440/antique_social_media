const faker = require('faker');

const staticUser = () => (
  {
    email: 'seed_user@seed.com',
    username: 'seed_user',
    password_digest: 'Pass123^'
  }
)

const randomUser = () => (
  {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password_digest: 'Pass123^'
  }
)

const randomAntique = (userId) => (
  {
    name: faker.name.firstName(),
    year: faker.datatype.number({min: 900, max: 1900}),
    user_id: userId
  }
)

module.exports = { staticUser, randomUser, randomAntique }