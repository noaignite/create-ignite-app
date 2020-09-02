const webpack = require('webpack')

module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: ['@storybook/addon-toolbars', '@storybook/addon-controls', '@storybook/addon-actions'],
  webpackFinal: async (config /*, { configType }*/) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // @todo - Currently not working
    // Change Storybook default import files from `index.js` to `stories.index.js`
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(
        /(api|blocks|components|containers)(\/\w+)*\/(index\.js)/,
        (resource) => {
          if (resource.resourceResolveData !== undefined) {
            // module was resolved
            const issuer = resource.resourceResolveData.context.issuer

            // replacement request
            const replacementRequest = resource.request.replace(/(index\.js)$/g, 'stories.index.js')
            if (replacementRequest.search(issuer) === -1) {
              if (resource.request.indexOf('src/api') !== -1) {
                console.log('\n\n-----------------------')
                console.log(resource.request)
                console.log(replacementRequest)
                // console.log(resource.request.replace(/(index\.js)$/g, 'stories.index.js'))
                console.log('-----------------------\n')
              }

              // check that issuer is not requesting itself, if not – replace request
              resource.request = replacementRequest
            }
          }
        },
      ),
    )

    // Return the altered config
    return config
  },
}

// @todo - Make sure all desired addons work
// import '@storybook/addon-knobs/register'
// import '@storybook/addon-actions/register'
// import '@storybook/addon-a11y/register'
