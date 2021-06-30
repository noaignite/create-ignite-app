const path = require('path')

module.exports = {
  resolve: {
    modules: [path.join(__dirname, './src'), 'node_modules'],
    alias: {
      test: path.join(__dirname, './test'),
    },
  },
}
