const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withTranspileModules = require('next-transpile-modules')([
  'dom7/dist/dom7.modular',
  'swiper/js/swiper.esm',
])

const nextConfig = {
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
  webpack: (config) => {
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

module.exports = withBundleAnalyzer(withTranspileModules(nextConfig))
