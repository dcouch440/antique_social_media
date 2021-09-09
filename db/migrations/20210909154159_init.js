
exports.up = async function (knex) {
  return knex.schema.table('like', table => {
    table.dropColumn('username');
  });
};

exports.down = function (knex) {
  return knex.schema.table('like', table => {
    table
      .string('username')
      .references('username')
      .inTable('user')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable();
  });
};
