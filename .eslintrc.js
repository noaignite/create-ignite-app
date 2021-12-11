const path = require('path')

module.exports = {
  globals: {
    __translationGroup: 'readonly',
  },
  extends: ['plugin:@next/next/recommended', '@noaignite/eslint-config'],
  settings: {
    'import/resolver': {
      webpack: {
        config: path.join(__dirname, './webpackBaseConfig.js'),
      },
    },
  },
  rules: {
    '@next/next/no-img-element': 'off',
  },
}
