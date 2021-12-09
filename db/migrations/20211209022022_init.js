
exports.up = async function (knex) {
  return knex.schema
    .alterTable('user', table => {
      table
        .string('avatar')
        .defaultTo('https://res.cloudinary.com/dbyretay5/image/upload/v1620591530/DEFAULT_USER.png')
        .alter();
    });
};

exports.down = async function (knex) {
  return knex.schema
    .alterTable('user', table => {
      table
        .string('avatar')
        .alter();
    });
};
