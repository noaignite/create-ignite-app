const webpack = require('webpack')

module.exports = {
  stories: ['../src/**/*stories.js'],
  addons: [
    '@storybook/addon-toolbars',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config /*, { configType }*/) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    /**
     * @todo
     * Dynamic resouce replacement currently not working
     * For now staticly define when needed
     */
    const replacementPlugin = webpack.NormalModuleReplacementPlugin
    config.plugins.push(new replacementPlugin(/(src\/api\/index\.js)/, './storybook.index.js'))
    config.plugins.push(
      new replacementPlugin(/(src\/containers\/RouterLink\/index\.js)/, './storybook.index.js'),
    )
    /* config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /(api|blocks|components|containers)(\/\w+)*\/(index\.js)/,
        (resource) => {
          if (resource.resourceResolveData !== undefined) {
            // module was resolved
            const issuer = resource.resourceResolveData.context.issuer

            // replacement request
            const replacementRequest = resource.request.replace(/(index\.js)$/g, 'stories.index.js')
            if (replacementRequest.search(issuer) === -1) {
              // check that issuer is not requesting itself, if not – replace request
              resource.request = replacementRequest
            }
          }
        },
      ),
    ) */

    // Return the altered config
    return config
  },
}
