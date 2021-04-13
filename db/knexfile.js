module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'node_ant_development',
      user: 'HB',
      password: '',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds',
    },
  },

};
