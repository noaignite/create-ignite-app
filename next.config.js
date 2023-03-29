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
  webpack: (config) => merge(config, webpackBaseConfig),
}

module.exports = withBundleAnalyzer(nextConfig)
