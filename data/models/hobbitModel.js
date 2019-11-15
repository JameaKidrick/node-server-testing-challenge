const db = require('../dbConfig');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

// send back an array of all hobbits in database
function find() {
  return db('hobbits');
};

// send back a specific hobbit
function findById(id) {
  return db('hobbits')
    .where({ id })
};

// add a new hobbit to the db (name required)
function add(hobbit) {
  return db('hobbits')
    .insert(hobbit)
};

// update a hobbit
function update(id, name) {
  return db('hobbits')
    .where({ id })
    .update(name)
};

// delete a hobbit
function remove(id) {
  return db('hobbits')
    .where({ id })
    .del()
};