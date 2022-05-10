const { merge } = require('webpack-merge')
const webpackBaseConfig = require('../webpackBaseConfig')

module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  staticDirs: ['../public'],
  stories: ['../src/**/*stories.js'],
  webpackFinal: async (config) =>
    merge(config, webpackBaseConfig, {
      resolve: {
        mainFiles: ['storybook.index', 'index'],
      },
    }),
}
