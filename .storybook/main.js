const { merge } = require('webpack-merge')
const webpackBaseConfig = require('../webpackBaseConfig')

module.exports = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  features: {
    storyStoreV7: true,
  },
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (config) => {
    return merge(config, webpackBaseConfig, {
      resolve: {
        mainFiles: ['storybook.index', 'index'],
      },
    })
  },
}
