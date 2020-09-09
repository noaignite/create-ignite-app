import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Toolbar from './Toolbar'

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  argTypes: {
    variant: storySelectArgType(['regular', 'dense']),
  },
}

const Template = (args) => (
  <Toolbar {...args}>
    <button type="button">Burger</button>

    <div style={{ flexGrow: 1, textAlign: 'center' }}>
      <img src="//source.unsplash.com/120x30" alt="" />
    </div>

    <button type="button">Log in</button>
  </Toolbar>
)

export const Default = Template.bind({})
Default.args = {
  disableGutters: false,
  variant: 'regular',
}
