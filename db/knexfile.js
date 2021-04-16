
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'node_ant_development',
      user: 'HB',
      password: 'postgresPASS',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: './migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },
  test: {
    client: 'postgresql',
    connection: {
      database: 'node_ant_test',
      user: 'HB',
      password: 'postgresPASS',
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
