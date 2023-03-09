
const { cypressConfig } = require('@axe-core/watcher')

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: 'abcdef-1234',
    },
  })
);