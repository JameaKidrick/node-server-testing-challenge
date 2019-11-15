
exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hobbits').insert([
        {
          name: 'Bilbo'
        },
        {
          name: 'Frodo'
        },
        {
          name: 'Sam'
        },
        {
          name: 'Merry'
        },
        {
          name: 'Pippin'
        },
        {
          name: 'Fatty'
        },
        {
          name: 'Otho'
        },
        {
          name: 'Lotho'
        },
        {
          name: 'Lobelia'
        },
        {
          name: 'Old Took'
        },
        {
          name: 'Smeagol'
        },
        {
          name: 'Deagol'
        },
      ]);
    });
};
