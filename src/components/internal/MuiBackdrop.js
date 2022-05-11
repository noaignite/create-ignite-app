import { alpha } from '@mui/material'

const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: alpha(theme.palette.text.primary, 0.2),
    }),
    invisible: {
      backgroundColor: 'transparent',
    },
  },
}

export default overrides
