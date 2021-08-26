import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import BrandIcon from '../icons/Brand'
import MenuIcon from '../icons/Menu'
import CloseIcon from '../icons/Close'
import IconButton from '../IconButton'
import Toolbar from '../Toolbar'
import AppBar from './AppBar'

export default {
  title: 'Components/AppBar',
  component: AppBar,
  decorators: [
    (Story) => (
      <div style={{ height: '100vh', background: '#eee' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: storySelectArgType(['default', 'inherit', 'primary', 'secondary']),
    position: storySelectArgType(['fixed', 'absolute', 'sticky', 'static', 'relative']),
  },
}

const Template = (args) => (
  <AppBar {...args}>
    <Toolbar variant="dense">
      <IconButton edge="start">
        <MenuIcon />
      </IconButton>

      <div style={{ flexGrow: 1, textAlign: 'center' }}>
        <IconButton>
          <BrandIcon style={{ width: 90 }} />
        </IconButton>
      </div>

      <IconButton edge="end">
        <CloseIcon />
      </IconButton>
    </Toolbar>
  </AppBar>
)

export const Default = Template.bind({})
Default.args = {
  color: 'default',
  elevation: 0,
  position: 'fixed',
}
