import * as React from 'react'
import { pages } from 'api/mock'
import { useHeaderColor } from 'utils'
import App from 'containers/App'
import * as blocks from 'blocks'

export default {
  title: 'Pages',
  component: App,
  argTypes: {
    headerColor: {
      control: ['default', 'transparent', 'auto'],
    },
  },
}

// eslint-disable-next-line react/prop-types
const Template = ({ headerColor, ...args }) => {
  useHeaderColor(headerColor)

  return <App {...args} />
}

export const HomePage = Template.bind({})
HomePage.args = {
  headerColor: pages.Home.headerColor,
  children: pages.Home.blocks.map((block, idx) => {
    const Block = blocks[block.name]
    return <Block key={idx} {...block.props} />
  }),
}

export const ContentPage = Template.bind({})
ContentPage.args = {
  headerColor: pages.Content.headerColor,
  children: pages.Content.blocks.map((block, idx) => {
    const Block = blocks[block.name]
    return <Block key={idx} {...block.props} />
  }),
}
