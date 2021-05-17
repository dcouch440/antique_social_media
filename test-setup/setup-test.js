const db = require('../db');

module.exports = async () => {
  await db.migrate.rollback();
  console.log('DB ROLLBACK SUCCESSFUL');

  await db.migrate.latest();
  console.log('DB MIGRATION SUCCESSFUL');

  await db.seed.run();
  console.log('DB SEED SUCCESSFUL');
};
