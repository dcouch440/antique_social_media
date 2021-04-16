const faker = require('faker');


const staticUser = () => (
  {
    email: 'seed_user@seed.com',
    username: 'seed_user',
    password: 'Pass123^'
  }
)

const randomUser = () => (
  {
    email: faker.internet.email(),
    username: faker.internet.userName(),
    password: 'Pass123^'
  }
)

const randomAntique = (userId) => (
  {
    name: faker.name.firstName(),
    year: faker.datatype.number({min: 900, max: 1900}),
    user_id: userId
  }
)

const testUser = () => (
  {
    email: 'test_user440@test.com',
    username: 'test_user',
    password: 'Pass123^'
  }
)

const testAntique = (userId) => (
  {
    name: 'bottle',
    year: 1234,
    user_id: userId
  }
)

module.exports = {
  staticUser, randomUser, randomAntique, testUser, testAntique
}