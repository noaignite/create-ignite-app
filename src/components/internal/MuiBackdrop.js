import { alpha } from '@mui/material/styles'

const overrides = {
  styleOverrides: (theme) => ({
    root: {
      backgroundColor: alpha(theme.palette.text.primary, 0.2),
    },
  }),
}

export default overrides
