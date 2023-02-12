const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  // For more on internalization see:
  // https://nextjs.org/docs/advanced-features/i18n-routing
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  poweredByHeader: false,
  experimental: {
    swcPlugins: [['@lingui/swc-plugin', {}]],
  },
}

module.exports = withBundleAnalyzer(nextConfig)
