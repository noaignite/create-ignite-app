/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
  locales: ['en'],
  extractBabelOptions: {
    presets: ['@babel/preset-typescript', '@babel/preset-react'],
  },
  sourceLocale: 'en',
  catalogs: [
    {
      path: 'public/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
}
