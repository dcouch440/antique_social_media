exports.up = async knex => {
  return knex.schema.createTable(
    'user', table => {
      table.increments();
      table.string('email').notNullable().unique();
      table.string('username')
        .notNullable()
        .unique();
      table.boolean('online').defaultTo(false);
      table.string('password_digest').notNullable();
      table.timestamps(true, true);
      table.datetime('deleted_at');
    }
  )
    .createTable(
      'antique', table => {
        table.increments();
        table.string('name').notNullable();
        table.integer('year');
        table.integer('user_id')
          .unsigned()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          .notNullable();
        table.string('title')
          .notNullable();
        table.text('body')
          .notNullable();
        table.timestamps(true, true);
        table.datetime('deleted_at');
      }
    )
    .createTable(
      'like', table => {
        table.increments();
        table
          .integer('antique_id')
          .unsigned()
          .references('id')
          .inTable('antique')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          .notNullable();
        table
          .integer('user_id')
          .unsigned()
          .references('id')
          .inTable('user')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          .notNullable();
        table
          .string('username')
          .references('username')
          .inTable('user')
          .onDelete('CASCADE')
          .onUpdate('CASCADE')
          .notNullable();
        table.unique(['antique_id', 'user_id']);
        table.timestamps(true, true);
        table.datetime('deleted_at');
      }
    );
};

exports.down = async knex => {
  return knex.schema
    .dropTableIfExists('like')
    .dropTableIfExists('antique')
    .dropTableIfExists('user');
};
