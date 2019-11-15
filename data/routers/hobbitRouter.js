const express = require('express');
const hobbitsDB = require('../models/hobbitModel');
const router = express.Router();

// GET: send back an array of all hobbits in database
router.get('/', (req, res) => {
  hobbitsDB.find()
    .then(hobbits => {
      res.status(200).json(hobbits)
    })
})

// GET: send back a specific hobbit


// POST: add a new hobbit to the db (name required)
router.post('/', (req, res) => {
  hobbitsDB.add(req.body)
    .then(hobbit => {
      res.status(201).json(hobbit)
    })
})

// PUT: update a hobbit


// DELETE: delete a hobbit
router.delete('/', (req, res) => {
  hobbitsDB.remove({ id })
  .then(hobbit => {
    res.status(200).json(hobbit)
  })
})

module.exports = router;