const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
// import allureWriter from "@shelex/cypress-allure-plugin/writer";

module.exports = defineConfig({

  chromeWebSecurity: false,
  //defaultCommandTimeout: 10000,
  //pageLoadTimeout: 60000,
  retries	: { "runMode": 2, "openMode": 2 },
  screenshot: 'on',
  //video: false,
  screenshotsFolder: 'reports/screenshots',
  videosFolder: 'reports/videos',
  allureReuseAfterSpec: true,
  env: {
    allureResultsPath: '../allure-results',
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
  },
});
