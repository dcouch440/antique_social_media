const app = require('../../../app');
const supertest = require('supertest');
const routes = require('../../../constant/routes');
const { randomUser, generateUuidUser } = require('../../../lib/seed-data');

describe('POST /users/signin', () => {

  const {users:{post_signin_path, post_signup_path}} = routes;

  const signInUser = randomUser();

  beforeAll(async () => {

    global.knex.insert({
      signInUser
    });

    await supertest(app)
      .post(post_signup_path)
      .set('Content-type', 'application/json')
      .send(JSON.stringify(signInUser));

  });

  it('Lets the user login if they exist', async () => {

    const {
      email :userEmail,
      password :userPassword,
      username :userUsername
    } = signInUser;

    const response = await supertest(app)
      .post(post_signin_path)
      .set('Content-type', 'application/json')
      .send({email: userEmail, password: userPassword})
      .expect('Content-Type', /json/)
      .expect(200);

    const {
      token,
      password,
      user:{username, id, email}
    } = await response.body;

    expect(username).toEqual(userUsername);
    expect(password).not.toEqual(userPassword);
    expect(email).toEqual(userEmail);
    expect(token.length).toBeGreaterThan(0);
    expect(id).toBeGreaterThan(1);

  });


  it('It rejects a non user username', async () => {

    const input = {
      ...signInUser,
      username: generateUuidUser.username()
    };

    const response = await supertest(app)
      .post(post_signup_path)
      .set('Content-type', 'application/json')
      .send(input);

    expect(response.status).toEqual(403);

  });

  it('It rejects a non user email', async () => {

    const input = {
      ...signInUser,
      username: generateUuidUser.email()
    };

    const response = await supertest(app)
      .post(post_signup_path)
      .set('Content-type', 'application/json')
      .send(input);

    expect(response.status).toEqual(403);

  });

});