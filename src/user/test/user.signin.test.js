const app = require('../../../app');
const db = require('../../../db');
const supertest = require('supertest');
const routes = require('../../../constant/routes');
const { staticUser } = require('../../../lib/seed-data');


describe('POST /users/signin', () => {

  it('Lets the user login if they exist', async () => {

    const {users:{post_signin_path}} = routes
    const signInInfo = staticUser()
    const {
      email :userEmail,
      password :userPassword,
      username :userUsername
    } = signInInfo;

    const response = await supertest(app)

    .post(post_signin_path)
    .set('Content-type', 'application/json')
    .send({email: userEmail, password: userPassword})
    .expect('Content-Type', /json/)
    .expect(200)


    const {token, user:{username, id, email}} = await response.body
    expect(username).toEqual(userUsername);
    expect(response.body.password).not.toEqual(userPassword);
    expect(email).toEqual(userEmail);
    expect(token.length).toBeGreaterThan(0);
    expect(id).toBeGreaterThanOrEqual(0);

  });

});