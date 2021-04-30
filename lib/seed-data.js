const faker = require('faker');
const uuid = require('uuid').v4;

const staticUser = () => (
  {
    email: 'seed_user@seed.com',
    username: 'seed_user',
    password: 'Pass123^'
  }
);

const randomUser = () => (
  {
    email: `User/${uuid()}@random.com`,
    username: `User/${uuid()}`,
    password: `Pass123^${uuid()}`
  }
);

const randomFactory = () => (
  {
    email: () => `User/${uuid()}@random.com`,
    username: () => `User/${uuid()}`,
    password: () => `Pass123^${uuid()}`
  }
);

const generateUuidUser = randomFactory();

const randomAntique = (userId) => (
  {
    name: faker.name.firstName(),
    year: faker.datatype.number({min: 900, max: 1900}),
    title: faker.lorem.sentence(3),
    body: faker.lorem.paragraphs(5, '\n\n'),
    user_id: userId
  }
);

const testUser = () => (
  {
    email: 'test_user440@test.com',
    username: 'test_user',
    password: 'Pass123^'
  }
);

const testAntique = (userId) => (
  {
    name: 'bottle',
    year: 1234,
    title: faker.lorem.sentence(3),
    body: faker.lorem.paragraphs(5, '\n\n'),
    user_id: userId
  }
);

module.exports = {
  staticUser, randomUser, randomAntique,
  testUser, testAntique, generateUuidUser
};