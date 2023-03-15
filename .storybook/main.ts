import { merge } from 'webpack-merge'
import type { StorybookConfig } from '@storybook/nextjs'
import webpackBaseConfig from '../webpackBaseConfig'

const config: StorybookConfig = {
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
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
