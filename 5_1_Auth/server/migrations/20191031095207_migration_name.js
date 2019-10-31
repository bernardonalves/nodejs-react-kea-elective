
exports.up = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.string('password');
        table.string('email');
        table.json('address_info');
     })
};

exports.down = function(knex) {
    return knex.schema.alterTable('users', function(table) {
        table.dropColumn('password');
        table.dropColumn('email');
        table.dropColumn('address_info');
     })
};
