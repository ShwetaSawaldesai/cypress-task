const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://www.goodreads.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  
  env:{
    username: 'something@gmail.com',
    password: 'yourpassword'
  },

  defaultCommandTimeout: 15000,
});
