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
function findById() {
  
};

// add a new hobbit to the db (name required)
function add() {
  
};

// update a hobbit
function update() {
  
};

// delete a hobbit
function remove() {
  
};