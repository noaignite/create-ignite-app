import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'

const theme = create({
  base: 'light',
  brandTitle: 'NoA Ignite',
  brandUrl: 'https://noaignite.se/',
  brandImage: '/noa-ignite.svg',
  brandTarget: '_blank',
})

addons.setConfig({
  theme,
})
