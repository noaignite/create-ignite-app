// eslint-disable-next-line camelcase
import { experimental_extendTheme } from '@mui/material'
import * as components from '../internal'
import breakpoints from './breakpoints'
import createMixins from './createMixins'
import createPalette from './createPalette'
import createTypography from './createTypography'
import shape from './shape'
import spacing from './spacing'

/**
 * `createTheme` wrapper function enables the following
 * - Custom light/dark pallete.
 * - Custom mixins with `breakpoints` and `spacing` access.
 *
 * @param {object} options
 */
export default function createTheme(options = {}) {
  const {
    mixins: mixinsInput = {},
    // palette: paletteInput = {},
    typography: typographyInput = {},
    ...other
  } = options

  const theme = experimental_extendTheme(
    {
      colorSchemes: {
        light: {
          palette: createPalette({ mode: 'light' }),
        },
        dark: {
          palette: createPalette({ mode: 'dark' }),
        },
      },
      breakpoints,
      components,
      // palette: createPalette(paletteInput),
      shape,
      spacing,
      typography: createTypography(typographyInput),
    },
    other,
  )

  // Patch the theme object with mixins once `createMixins` arguments are defined.
  theme.mixins = createMixins(theme.breakpoints, theme.spacing, mixinsInput)

  return theme
}
