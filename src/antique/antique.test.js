const app = require('../../app');
const supertest = require('supertest');

describe('GET /antiques', () => {

  it('should respond with antiques', async () => {

    const response = await supertest(app)
      .get('/antiques')
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    expect(response.body.length).toBeGreaterThan(0);

  });

});
