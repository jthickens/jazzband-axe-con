const { defineConfig } = require('cypress');
const { cypressConfig } = require('@axe-core/watcher');

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: '2429348b-33ed-4713-9f95-236be7836f32',
      serverURL: 'https://axe.dequelabs.com'
    }
  })
);