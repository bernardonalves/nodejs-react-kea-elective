
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').insert([
    {name: 'Benny', email:'benny@benny.tk', password: '$2y$12$VjXqRfqUp294wmLL/nzbLuTm6GuV9lnmqkwhqTP/NJ7BmZAQ8IY3G', apiKey: 'shit'}
  ]);
};
