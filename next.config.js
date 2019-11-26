const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')

const ANALYZE = process.env.ANALYZE === 'true'

const nextConfig = {
  analyzeServer: ANALYZE,
  analyzeBrowser: ANALYZE,
  bundleAnalyzerConfig: {
    browser: {
      openAnalyzer: false,
      analyzerHost: '0.0.0.0',
      analyzerPort: 3002,
    },
    server: {
      openAnalyzer: false,
      analyzerHost: '0.0.0.0',
      analyzerPort: 3003,
    },
  },
  poweredByHeader: false,
  serverRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    WORDPRESS_URL: process.env.WORDPRESS_URL,
    GTM_ID: process.env.GTM_ID,
  },
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    WORDPRESS_URL: process.env.WORDPRESS_URL,
    GTM_ID: process.env.GTM_ID,
  },
  webpack: config => {
    // Extend webpack config here
    config.module.rules.push({
      test: /\.(svg|otf|eot|ttf|woff|woff2|png)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          publicPath: `/_next/public`,
          outputPath: 'public',
        },
      },
    })

    return config
  },
}

module.exports = withBundleAnalyzer(nextConfig)
