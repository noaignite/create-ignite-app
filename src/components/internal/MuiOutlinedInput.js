import { outlinedInputClasses } from '@mui/material'

const overrides = {
  styleOverrides: {
    root: {
      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderWidth: 1,
      },
    },
  },
}

export default overrides
