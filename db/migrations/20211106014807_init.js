
exports.up = function (knex) {
  return knex.schema.createTable(
    'antique_image', table => {
      table
        .increments();
      table
        .integer('antique_id')
        .unsigned()
        .references('id')
        .inTable('antique')
        .onDelete('CASCADE')
        .notNullable();
      table
        .string('secure_url')
        .notNullable();
      table
        .integer('width')
        .notNullable();
      table
        .integer('height')
        .notNullable();
      table
        .timestamps(true, true);
      table
        .datetime('deleted_at');
    });
};

exports.down = async function (knex) {
  return knex.raw('DROP TABLE IF EXISTS "antique_image" CASCADE');
};
