const app = require('../../app');
const supertest = require('supertest');
const routes = require('../../constant/routes');

describe('GET /antiques', () => {

  it('gets 20 antiques when no query is present', async () => {

    const {antiques:{get_antiques_path}} = routes

    const response = await supertest(app)

    .get(get_antiques_path)
    .expect('Content-Type', /json/)
    .expect(200)
    .catch(err => console.error(err));

    expect(response.body).toBeInstanceOf(Array);
  });

});



