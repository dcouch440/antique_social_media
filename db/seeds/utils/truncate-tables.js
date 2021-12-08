const truncateTables = async knex => Promise.all([
  knex.raw('TRUNCATE TABLE "user" CASCADE'),
  knex.raw('TRUNCATE TABLE "antique" CASCADE'),
  knex.raw('TRUNCATE TABLE "like" CASCADE'),
  knex.raw('TRUNCATE TABLE "antique_image" CASCADE'),
]);

module.exports = truncateTables;