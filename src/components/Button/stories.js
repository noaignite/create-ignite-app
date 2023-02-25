import { Button } from '@mui/material'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['inherit', 'text', 'primary', 'secondary', 'success', 'error', 'info', 'warning'],
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

export const Default = {
  args: {
    children: 'Just a button',
    color: 'text',
    disabled: false,
    fullWidth: false,
    size: 'medium',
    variant: 'outlined',
  },
}
