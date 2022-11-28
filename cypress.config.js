const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  pageLoadTimeout: 80000,
  viewportHeight: 800,
  viewportWidth: 1500,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config);
    },
    baseUrl: "https://staging.admin.sharply.africa",
    defaultCommandTimeout: 80000,
    pageLoadTimeout: 200000,
    viewportHeight: 800,
    viewportWidth: 1500,

    reporter: "mocha-junit-reporter",
    reporterOptions: {
      mochaFile: "cypress/reports/junit/test-results.[hash].xml",
      testsuitesTitle: false,
    },
  },
});
