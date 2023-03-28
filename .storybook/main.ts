import { merge } from 'webpack-merge'
import type { StorybookConfig } from '@storybook/nextjs'
import webpackBaseConfig from '../webpackBaseConfig'

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  babel: () => ({
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
      'macros',
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
    ],
    env: {
      development: {},
    },
  }),
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  staticDirs: ['../public'],
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  webpackFinal: async (baseConfig) => {
    return merge(baseConfig, webpackBaseConfig, {
      resolve: {
        mainFiles: ['storybook.index', 'index'],
      },
    })
  },
}

export default config
