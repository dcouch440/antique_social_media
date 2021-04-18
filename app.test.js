const app = require('./app');
const routeConstants = require('./constant/routes');
const supertest = require('supertest');


describe('GET /', () => {

  it('should respond to with a message', async () => {

    const response = await supertest(app)
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    expect(await response.body.message).toEqual(routeConstants.message);

  });

  it('it should not connect if the url is wrong', async () => {

    await supertest(app)
      .get('/NO_ROUTE')
      .expect('Content-Type', /json/)
      .expect(404)
      .catch(err => console.error(err));

  })

});