
exports.up = function(knex) {
    return knex.schema.createTable('sent_email', (table) => {
        table.increments('id');
        table.string('sender_email').notNullable();
        table.foreign('sender_email').references('email').inTable('users').onDelete('CASCADE').onUpdate('RESTRICT')
        table.string('recipient_email').notNullable();
        table.string('subject').notNullable();
        table.string('content', 8192).notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now());
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sent_email');
  };
  