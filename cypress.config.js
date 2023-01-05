const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },

  chromeWebSecurity: false,
  //defaultCommandTimeout: 10000,
  //pageLoadTimeout: 60000,
  retries	: { "runMode": 2, "openMode": 2 },
  screenshot: 'on',
  //video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
  },
});
