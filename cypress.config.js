const { defineConfig } = require('cypress');
const { cypressConfig } = require('@axe-core/watcher');

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: 'fe734ad2-2e6b-4c94-8714-5653bdad3464',
      serverURL: 'https://axe.dequelabs.com'
    }
  })
);