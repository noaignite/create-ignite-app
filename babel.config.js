const productionPlugins = ['@babel/plugin-transform-react-constant-elements']

module.exports = {
  presets: [
    [
      'next/babel',
      {
        // Target ES2015+ browsers
        'preset-env': {
          targets: 'Chrome >= 60, Safari >= 10.1, iOS >= 10.3, Firefox >= 54, Edge >= 15',
          useBuiltIns: false,
        },
      },
    ],
  ],
  plugins: [
    'babel-plugin-optimize-clsx',
    [
      'babel-plugin-i18n-tag-translate',
      {
        groupDir: './src',
      },
    ],
  ],
  env: {
    development: {},
    production: {
      plugins: productionPlugins,
    },
  },
}
