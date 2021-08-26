import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import CloseIcon from '../icons/Close'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: storySelectArgType([
      'inherit',
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
    ]),
    size: storySelectArgType(['small', 'medium', 'large']),
    variant: storySelectArgType(['text', 'outlined', 'contained']),
    onClick: { action: 'clicked' },
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just a button',
  color: 'inherit',
  disabled: false,
  endIcon: <CloseIcon />,
  fullWidth: false,
  size: 'medium',
  startIcon: <CloseIcon />,
  variant: 'outlined',
}
