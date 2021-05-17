const truncateTables = async knex => Promise.all([
  knex.raw('TRUNCATE TABLE "user" CASCADE'),
  knex.raw('TRUNCATE TABLE "antique" CASCADE'),
  knex.raw('TRUNCATE TABLE "like" CASCADE')
]);

module.exports = truncateTables;