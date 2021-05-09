const NodeEnvironment = require('jest-environment-node');
const knexfile = require('./knexfile');
const db = require('./db');

class customEnvironment extends NodeEnvironment
{
  async setup ()
  {
    await super.setup();

    this._knex = db;

    const { database :dbname } = knexfile.test.connection;

    console.info(
      `[ENV] migrating db ${dbname}`
    );

    await this._knex.migrate.latest();
    await this._knex.seed.run();

    this.global.dbName = dbname;
    this.global.knex = this._knex;
  }

  async teardown ()
  {
    console.info('[ENV] destroying db');
    await this._knex.destroy();
    await super.teardown();
  }
}

module.exports = customEnvironment;