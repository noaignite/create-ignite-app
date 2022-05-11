import { buttonBaseClasses } from '@mui/material'

const overrides = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      [`&.${buttonBaseClasses.focusVisible}`]: {
        // Mimic native browser focus styles
        // https://ghinda.net/article/mimic-native-focus-css/
        outline: '1px dotted #212121',
        '@media (-webkit-min-device-pixel-ratio: 0)': {
          outline: '5px auto -webkit-focus-ring-color',
        },
      },
    },
  },
}

export default overrides
