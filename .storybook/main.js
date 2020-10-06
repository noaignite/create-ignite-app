module.exports = {
  stories: ['../src/**/*stories.js'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  webpackFinal: async (config /*, { configType }*/) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Enable Storybook forking of main files
    config.resolve.mainFiles = ['storybook.index', 'index']

    // Return the altered config
    return config
  },
}
