const supertest = require('supertest');
const { staticUser } = require('./seed-data');

const signUserIn = async app => {
  const { email, password } = staticUser;

  await supertest(app)
    .post('/signin')
    .send({ email, password });
};

module.exports = signUserIn;