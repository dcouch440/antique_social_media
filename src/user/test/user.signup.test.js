const app = require('../../../app');
const supertest = require('supertest');
const routes = require('../../../constant/routes');
const { randomUser } = require('../../../lib/seed-data');


describe('POST /users/signup', () => {

  const {users:{post_signup_path}} = routes

  it('Lets the user sign up if data is correct', async () => {

    const signUpInfo = randomUser();

    global.knex.insert({
      signUpInfo
    })

    const response = await supertest(app)
      .post(post_signup_path)
      .set('Content-type', 'application/json')
      .send(signUpInfo)
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    const {token, username, email } = await response.body
    expect(token.length).toBeGreaterThan(0);
    expect(username).toEqual(signUpInfo.username);
    expect(email).toEqual(signUpInfo.email);

  });

});