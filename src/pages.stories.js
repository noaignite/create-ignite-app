import * as React from 'react'
import { pages } from 'api/mock'
import { createRenderBlock, useHeaderMode } from 'utils'
import * as blockVariants from 'blocks'
import App from 'containers/App'

export default {
  title: 'Pages',
  component: App,
  argTypes: {
    headerMode: {
      options: ['opaque', 'transparent', 'auto'],
      control: {
        type: 'select',
      },
    },
  },
}

// eslint-disable-next-line react/prop-types
const Template = ({ headerMode, ...args }) => {
  useHeaderMode(headerMode)

  return <App {...args} />
}

const renderBlock = createRenderBlock(blockVariants)

export const HomePage = Template.bind({})
HomePage.args = {
  headerMode: pages.Home.headerMode,
  children: pages.Home.children.map(renderBlock),
}

export const ContentPage = Template.bind({})
ContentPage.args = {
  headerMode: pages.Content.headerMode,
  children: pages.Content.children.map(renderBlock),
}
