const app = require('../../app');
const supertest = require('supertest');

describe('GET /antiques', () => {

  it('', async () => {
    const response = await supertest(app)
      .get('/antiques')
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    expect(response.body).toBeInstanceOf(Array);
  });

});



