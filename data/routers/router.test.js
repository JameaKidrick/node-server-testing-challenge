// Write a minimum of two tests per route handler
const request = require("supertest");
const server = require('../../api/server')
let { find, findById, add, update, remove } = require('../models/hobbitModel');

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
];

describe('hobbits model', () => {
  /*
    describe("insert()", function() {
      beforeEach(async () => {
        await db("hobbits").truncate();
      });
  */
  describe('find', () => {
    // test('return all hobbits', async () => {
    //   const find = jest.fn();
    //   find.mockReturnValue(hobbits)

    //   const res = await find()
    //     expect(res).toStrictEqual([{
    //       name: 'Bilbo' // 0
    //     },
    //     {
    //       name: 'Frodo' // 1
    //     }])
    // });

    test('return all hobbits and status 200', async function(){
      // find = jest.fn(() => {
      //   return new Promise(res => {
      //     return 'hobbit'
      //   }
      //   )
      // })
      const response = await request(server).get('/hobbit')
      expect(response.status).toEqual(200)
      expect(response.body).toHaveLength(6);
    })
  })


  describe('findById', () => {
    test.todo('return specified hobbits')
    test.todo('return status 404')
  })

  describe('add', () => {
    test.todo('return all hobbits + newly added or the number 1')
    test.todo('return JSON')
    test('return all hobbits + newly added or the number 1', async function() 
    {
      // add = jest.fn(() => {
      //   return new Promise(res => res ({name:"mea"}))
      // })
      const expectedBody = {name: "mea"};
      const response = await request(server).post('/hobbit').send({name:"mea"})
      console.log(response.body)

      expect(response.status).toEqual(201)
      expect(response.body).toStrictEqual([7])
    })
  })

  describe('update', () => {
    test.todo('return the number 1')
    test.todo('should return a name property with mea as its value')
  })

  describe('remove', () => {
    test.todo('return the number 1')
    test.todo('return status 500')
    test('jlj', async function() {
      const response = await request(server).delete('/hobbit').send('5')
      expect(response.status).toEqual(500)
      expect(response.body).toStrictEqual({});
    })
  })
})