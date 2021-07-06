const hobbits = [
  {
    name: 'Bilbo' // 0
  },
  {
    name: 'Frodo' // 1
  },
  {
    name: 'Sam' // 2
  },
  {
    name: 'Merry' // 3
  },
  {
    name: 'Pippin' // 4
  },
  {
    name: 'Smeagol' // 5
  }
]

exports.seed = function(knex) {
  // Deletes ALL existing entries and resets ids
  return knex('hobbits')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('hobbits').insert(hobbits);
    });
};
