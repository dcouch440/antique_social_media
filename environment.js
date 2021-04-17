const NodeEnvironment = require('jest-environment-node');
const knexfile = require('./db/knexfile');
const knex = require('knex');


class customEnvironment extends NodeEnvironment
{
  async setup()
  {
    await super.setup();

    this._knex = knex(knexfile['test'])

    const { database :dbname } = knexfile.test.connection


    console.info(
      `[ENV] migrating db ${dbname}`
    )

    await this._knex.migrate.latest();
    await this._knex.seed.run();

    this.global.dbName = dbname
    this.global.knex = this._knex
  }

  async teardown()
  {

    console.info('[ENV] destroying db')
    await this._knex.destroy()
    await super.teardown()
  }

}

module.exports = customEnvironment;






// // my-custom-environment
// const NodeEnvironment = require('jest-environment-node');

// class CustomEnvironment extends NodeEnvironment {
//   constructor(config, context) {
//     super(config, context);
//     this.testPath = context.testPath;
//   }

//   async setup() {
//     await super.setup();
//     await someSetupTasks(this.testPath);
//     this.global.someGlobalObject = createGlobalObject();
//     this.global.foo = 'bar';
//   }

//   async teardown() {
//     this.global.someGlobalObject = destroyGlobalObject();
//     await someTeardownTasks();
//     await super.teardown();
//   }

//   runScript(script) {
//     return super.runScript(script);
//   }
// }

// module.exports = CustomEnvironment;
