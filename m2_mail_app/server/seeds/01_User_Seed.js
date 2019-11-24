
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: "Daniel", password: "very_secure_password_", email: "daniel@mail.org"},
        {username: "Romeo", password: "very_secure_password_", email: "romeo@mail.org"},
        {username: "Joao", password: "very_secure_password_", email: "joao@mail.org"},
        {username: "Afonso", password: "very_secure_password_", email: "afonso@mail.org"},
        {username: "Ricardo", password: "very_secure_password_", email: "ricardo@mail.org"},
        {username: "Claudia", password: "very_secure_password_", email: "claudia@mail.org"},
        {username: "Pedro", password: "very_secure_password_", email: "pedro@mail.org"},
        {username: "Steffen", password: "very_secure_password_", email: "steffen@mail.org"},
        {username: "Daniela", password: "very_secure_password_", email: "daniela@mail.org"},
        {username: "Carolina", password: "very_secure_password_", email: "carolina@mail.org"}
      ]);
    });
};
