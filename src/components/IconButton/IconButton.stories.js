import * as React from 'react'
import { IconButton } from '@mui/material'

export default {
  component: IconButton,
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'inherit', 'primary', 'secondary'],
    },
    edge: {
      control: 'select',
      options: ['start', 'end', false],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
}

export const Default = {
  args: {
    children: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    color: 'default',
    disabled: false,
    edge: false,
    size: 'medium',
  },
}
