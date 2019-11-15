const db = require('../dbConfig');
const { find, findById, add, update, remove } = require('./hobbitModel');
const hobbitArray = require('../seeds/001-hobbits');

// GENERAL MODEL TESTING BEFORE ROUTER TESTING
// describe('hobbits model', () => {

  

  describe('find', () => {
    test('return all hobbits', async () => {
      const hobbits = await find();
      expect(hobbits).toHaveLength(6);
    });
  });

  describe('findById', () => {
    test('return specific hobbit by id', async () => {
      const id = 1;
      const [hobbit] = await findById(id);
      expect(hobbit.name).toBe('Bilbo')
    });
  })

  // COULDN'T GET TRUNCATE TO WORK
  // describe('add', () => {
        // beforeEach(async () => {
    //   await db('hobbits').truncate();
    // });
  //   test('adds a new hobbit', async () => {
  //     await add({name:"mea"});
  //     const hobbits = await db('hobbits')
  //     console.log(hobbits)
  //     expect(hobbits).toHaveLength(15);
  //   });
  // })

  describe('update', () => {

  })

  describe('remove', () => {

  })
// })