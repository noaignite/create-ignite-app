import * as React from 'react'
import { Button } from '@mui/material'
import storySelectArgType from 'utils/storySelectArgType'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: storySelectArgType([
      'inherit',
      'text',
      'textInverted',
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
    ]),
    size: storySelectArgType(['small', 'medium', 'large']),
    variant: storySelectArgType(['text', 'outlined', 'contained']),
  },
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just a button',
  color: 'inherit',
  disabled: false,
  fullWidth: false,
  size: 'medium',
  variant: 'outlined',
}
