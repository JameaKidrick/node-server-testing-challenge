const express = require('express');
const server = express();
const hobbitRouter =  require('../data/routers/hobbitRouter');

server.use(express.json());
server.use('/hobbit', hobbitRouter);

server.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = server;