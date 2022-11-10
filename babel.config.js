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
    [
      '@emotion',
      {
        // Allows an emotion component to be used as a CSS selector.
        // https://github.com/mui/material-ui/issues/26366#issuecomment-942435579
        importMap: {
          '@mui/material': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/material', 'styled'],
            },
          },
          '@mui/material/styles': {
            styled: {
              canonicalImport: ['@emotion/styled', 'default'],
              styledBaseImport: ['@mui/material/styles', 'styled'],
            },
          },
        },
      },
    ],
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
