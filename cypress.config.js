const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    configFile: "reporter-config.json",
    charts : true
  },
  chromeWebSecurity: false,
  //screenshotsFolder: 'reports/screenshots',
  //videosFolder: 'cypress/videos',
  e2e: {

  },
});
