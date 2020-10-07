const path = require('path')

// This module is also used as the eslint resolver
module.exports = {
  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    alias: {
      test: path.join(__dirname, './test'),
    },
  },
}
