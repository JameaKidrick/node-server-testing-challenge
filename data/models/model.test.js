const db = require('../dbConfig');
const { find, findById, add, update, remove } = require('./hobbitModel');

// GENERAL MODEL TESTING BEFORE ROUTER TESTING
describe('hobbits model', () => {
  describe('find', () => {
    test('return all hobbits', async () => {
      await find();
      // const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength();
    })
  })

  describe('findById', () => {

  })

  describe('add', () => {

  })

  describe('update', () => {

  })

  describe('remove', () => {

  })
})