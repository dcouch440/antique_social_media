const app = require('../../../app');
const supertest = require('supertest');
const routeConstants = require('../../../constant/routes');
const { testUser } = require('../../../constant/test-data');

describe('POST /users/signup', () => {
  it('Lets the user sign up if data is correct', async () => {

    const signUpInfo = testUser();

    const response = await supertest(app)

    .post('/users/signup')
    .set('Content-type', 'application/json')
    .send(JSON.stringify(signUpInfo))
    .expect('Content-Type', /json/)
    .expect(200)
    .catch(err => console.error(err));

    const {token, username, email} = await response.body
    expect(token.length).toBeGreaterThan(0);
    expect(username).toEqual(signUpInfo.username);
    expect(email).toEqual(signUpInfo.email);

  });

});