const nextConfig = require('./next.config.js')

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
  format: 'po',
}
