const request = require('supertest');
const server = require('./server');

// CHECKING TO MAKE SURE THE ENVIRONMENT IS IN TESTING, NOT DEVELOPMENT
it("should set db environment to testing", function() {
  expect(process.env.DB_ENV).toBe("testing");
});