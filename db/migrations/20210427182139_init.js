exports.up = function(knex) {
  return knex.schema.createTable(
    'avatar', table => {
      table.increments();
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('user')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
      table.string('image_url').notNullable();
      table.string('public_id').notNullable();
      table.string('resource_type').notNullable();
      table.integer('width').notNullable();
      table.integer('height').notNullable();
      table.string('format').notNullable();
      table.unique(['user_id', 'image_url']);
      table.timestamps(true, true);
      table.datetime('deleted_at');
    }
  );
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('image');
};
