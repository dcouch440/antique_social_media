const server = require('./index');
const routesConstants = require('./constant/routes');
const supertest = require('supertest').agent(server);

describe('GET /', () => {

  it('should respond to with a message', async () => {

    const response = await supertest
      .get('/')
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    expect(response.body.message).toEqual(routesConstants.message);

  });

  // it('should not connect if the url is wrong', async () => {

  //   await supertest
  //     .get('/NO_ROUTE')
  //     .expect('Content-Type', /json/)
  //     .expect(404)
  //     .catch(err => console.error(err));

  // });

});