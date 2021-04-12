module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: '',
      user: 'HB',
      password: process.env.PG_PASS,
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
      directory: './seeds',
    },
  },

};
