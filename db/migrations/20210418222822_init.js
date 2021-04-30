exports.up = async knex => {
  return knex.schema.createTable(
    'image', table => {
      table.increments();
      table
        .integer('antique_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('antique')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        .notNullable();
      table.string('image_url').notNullable();
      table.string('public_id').notNullable();
      table.string('resource_type').notNullable();
      table.integer('width').notNullable();
      table.integer('height').notNullable();
      table.string('format').notNullable();
      table.unique(['antique_id', 'image_url']);
      table.timestamps(true, true);
      table.datetime('deleted_at');
    }
  );
};

exports.down = async knex => {
  return knex.schema
    .dropTableIfExists('image');
};
