import * as React from 'react'
import { pages } from 'api/mock'
import { createRenderBlock, useHeaderColor } from 'utils'
import * as blockVariants from 'blocks'
import App from 'containers/App'

export default {
  title: 'Pages',
  component: App,
  argTypes: {
    headerColor: {
      options: ['default', 'transparent', 'auto'],
      control: {
        type: 'select',
      },
    },
  },
}

// eslint-disable-next-line react/prop-types
const Template = ({ headerColor, ...args }) => {
  useHeaderColor(headerColor)

  return <App {...args} />
}

const renderBlock = createRenderBlock(blockVariants)

export const HomePage = Template.bind({})
HomePage.args = {
  headerColor: pages.Home.headerColor,
  children: pages.Home.children.map(renderBlock),
}

export const ContentPage = Template.bind({})
ContentPage.args = {
  headerColor: pages.Content.headerColor,
  children: pages.Content.children.map(renderBlock),
}
