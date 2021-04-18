const app = require('../../../app');
const supertest = require('supertest');
const routes = require('../../../constant/routes');

describe('GET /antiques', () => {

  const {antiques:{get_antiques_path}} = routes

  it('gets 20 antiques when no query is present', async () => {

    const response = await supertest(app)
      .get(get_antiques_path)
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    const {body} = response;

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toEqual(20);

  });

  it('limits the query when called in query', async () => {

    const response = await supertest(app)
      .get(get_antiques_path + '?LIMIT=10&OFFSET=10' )
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    const {body} = response;

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toEqual(10);

  });

  it('it will return nothing if the offset is at the end of the array', async () => {

    const response = await supertest(app)
      .get(get_antiques_path + '?LIMIT=10&OFFSET=100000' )
      .expect('Content-Type', /json/)
      .expect(200)
      .catch(err => console.error(err));

    const {body} = response;

    expect(body).toBeInstanceOf(Array);
    expect(body.length).toEqual(0);

  });

});



