const webpack = require('webpack')

module.exports = async props => {
  // Extend Storybook webpack config here
  const { config } = props

  // Change Storybook default import files from `index.js` to `stories.js`
  config.plugins.push(
    new webpack.NormalModuleReplacementPlugin(
      /(api|blocks|components|containers)(\/\w+)*\/(index\.js)/,
      resource => {
        if (resource.resourceResolveData !== undefined) {
          // module was resolved
          const issuer = resource.resourceResolveData.context.issuer

          // replacement request
          const replacementRequest = resource.request.replace(/(index\.js)$/g, 'stories.js')
          if (replacementRequest.search(issuer) === -1) {
            // check that issuer is not requesting itself, if not – replace request
            resource.request = replacementRequest
          }
        }
      },
    ),
  )

  return config
}
