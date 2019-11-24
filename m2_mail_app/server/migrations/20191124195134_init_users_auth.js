
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.increments('id');
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.string('apiKey');
      table.unique('email');
      table.unique('apiKey');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users');
};
