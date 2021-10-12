import * as React from 'react'
import { pages } from 'api/mock'
import { createRenderBlock } from 'utils'
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

const Template = (args) => <App {...args} />

const renderBlock = createRenderBlock(blockVariants)

export const HomePage = Template.bind({})
HomePage.args = {
  ...pages.Home,
  children: pages.Home.children.map(renderBlock),
}

export const ContentPage = Template.bind({})
ContentPage.args = {
  ...pages.Content,
  children: pages.Content.children.map(renderBlock),
}
