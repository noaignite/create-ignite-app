import * as React from 'react'
import { LoadingButton } from '@mui/lab'

export default {
  title: 'Components/LoadingButton',
  component: LoadingButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
    },
    loadingPosition: {
      control: 'select',
      options: ['start', 'end', 'center'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'],
    },
  },
}

const Template = (args) => <LoadingButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just a button',
  color: 'inherit',
  disabled: false,
  loading: false,
  loadingPosition: 'center',
  size: 'medium',
  variant: 'contained',
}
