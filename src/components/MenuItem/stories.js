import * as React from 'react'
import MenuItem from './MenuItem'

export default {
  title: 'Components/MenuItem',
  component: MenuItem,
}

const Template = (args) => <MenuItem {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just some children',
  component: 'button',
  dense: false,
  disabled: false,
  disableGutters: false,
  selected: false,
}
