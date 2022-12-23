const { defineConfig } = require("cypress");

module.exports = defineConfig({

  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json"
  },
  
  chromeWebSecurity: false,
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 65000,
  retries	: { "runMode": 3, "openMode": 3 },
  video: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
