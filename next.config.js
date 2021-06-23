const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { merge } = require('webpack-merge')
const webpackBaseConfig = require('./webpackBaseConfig')

const nextConfig = {
  // For more on internalization see:
  // https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
  webpack: (config) => merge(config, webpackBaseConfig),
}

module.exports = withBundleAnalyzer(nextConfig)
