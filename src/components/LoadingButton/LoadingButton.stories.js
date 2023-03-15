import { LoadingButton } from '@mui/lab'

export default {
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

export const Default = {
  args: {
    children: 'Just a button',
    color: 'inherit',
    disabled: false,
    loading: false,
    loadingPosition: 'center',
    size: 'medium',
    variant: 'contained',
  },
}
