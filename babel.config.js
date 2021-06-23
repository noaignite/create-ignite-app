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
    'babel-plugin-lodash',
    [
      'babel-plugin-i18n-tag-translate',
      {
        groupDir: './src',
      },
    ],
    [
      'babel-plugin-transform-imports',
      {
        '@material-ui/core': {
          // Use "transform: '@material-ui/core/${member}'," if your bundler does not support ES modules
          // eslint-disable-next-line no-template-curly-in-string
          transform: '@material-ui/core/esm/${member}',
          preventFullImport: true,
        },
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
