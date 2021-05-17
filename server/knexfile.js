require('dotenv').config();

module.exports = {

  development: {
    client: 'postgresql',
    connection: process.env.PG_CONNECTION,
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
    client: 'postgresql',
    connection: {
      database:process.env.DB_NAME,
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

  test: {
    client: 'postgresql',
    connection: process.env.PG_CONNECTION_TEST,
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
