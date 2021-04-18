exports.up = async knex => {
  await Promise.all([
    knex.schema.createTable(
      'user', table => {
        table.increments();
        table.string('email').notNullable().unique();
        table.string('username').notNullable();
        table.string('password_digest').notNullable();
        table.timestamps(true, true);
        table.datetime('deleted_at');
      }
    ),
    knex.schema.createTable(
      'antique', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('year');
        table.integer('user_id').notNullable();
        table.timestamps(true, true);
        table.datetime('deleted_at');
      }
    ),
    knex.schema.createTable(
      'like', table => {
        table.increments();
        table.integer('user_id').notNullable();
        table.integer('antique_id').notNullable();
        table.unique(['user_id', 'antique_id'])
        table.timestamps(true, true);
        table.datetime('deleted_at');
      }
    )
  ]);
};

exports.down = async knex => {
  return knex.schema
    .dropTableIfExists('user')
    .dropTableIfExists('antique')
    .dropTableIfExists('like');
};
