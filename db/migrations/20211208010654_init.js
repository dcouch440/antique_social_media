
exports.up = function (knex) {
  return knex.schema.alterTable(
    'antique_image', table => {
      table
        .string('public_id')
        .notNullable();
    });
};

exports.down = async function (knex) {
  return knex.schema.alterTable('antique_image', async table => {
    await table.dropColumn('public_id');
  });
};
