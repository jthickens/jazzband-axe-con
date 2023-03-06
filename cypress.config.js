const { defineConfig } = require("cypress");
const { cypressConfig } = require('@axe-core/watcher')

// Get your configuration from environment variables.
const { API_KEY, SERVER_URL } = process.env

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: API_KEY,
      serverURL: SERVER_URL
    },
    defaultCommandTimeout: 10000,
    e2e: {
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
  })
);
