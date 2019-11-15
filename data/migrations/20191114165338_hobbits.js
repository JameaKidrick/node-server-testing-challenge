
exports.up = function(knex) {
  return knex.schema.createTable('hobbits', table => {
    table
      .increments();

    table
      .string('name', 168).notNullable().unique();

    table
      .timestamps(true, true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('hobbits');
};
