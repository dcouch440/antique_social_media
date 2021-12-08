
exports.up = function (knex) {
  return knex.schema.alterTable(
    'antique_image', table => {
      table.string('public_id');
    });
};

exports.down = function (knex) {
  return knex.schema.alterTable('antique_image', table => {
    table.dropColumn('public_id');
  });
};
