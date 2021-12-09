require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'node_ant_test_3',
      user:process.env.PG_USER,
      password:process.env.PG_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
  test: {
    client: 'postgresql',
    connection: {
      database:process.env.TEST_DB_NAME,
      user:process.env.PG_USER,
      password:process.env.PG_PASS,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },

};
