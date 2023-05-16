const nextConfig = require('./next.config.js')
const extractor = require('./lingui-custom-extractor')

/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: nextConfig.i18n.locales,
  sourceLocale: nextConfig.i18n.defaultLocale,
  catalogs: [
    {
      path: 'public/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  extractors: [extractor],
  format: 'po',
}
