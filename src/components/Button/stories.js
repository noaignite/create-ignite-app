import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import CrossIcon from '../icons/Cross'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: storySelectArgType(['default', 'inherit', 'primary', 'secondary']),
    size: storySelectArgType(['small', 'medium', 'large']),
    variant: storySelectArgType(['text', 'outlined', 'contained']),
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just a button',
  color: 'default',
  disabled: false,
  endIcon: <CrossIcon />,
  fullWidth: false,
  size: 'medium',
  startIcon: <CrossIcon />,
  variant: 'outlined',
}
