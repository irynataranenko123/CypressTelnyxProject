const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  retries	: { "runMode": 3, "openMode": 3 },
  trashAssetsBeforeRuns : true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    
    },
  },
});
