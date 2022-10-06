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
    colorSchemes: colorSchemesInput = {},
    mixins: mixinsInput = {},
    typography: typographyInput = {},
    ...other
  } = options

  const theme = experimental_extendTheme(
    {
      colorSchemes: {
        ...colorSchemesInput,
        light: {
          ...colorSchemesInput.light,
          palette: createPalette({ mode: 'light', ...colorSchemesInput.light?.palette }),
        },
        dark: {
          ...colorSchemesInput.dark,
          palette: createPalette({ mode: 'dark', ...colorSchemesInput.dark?.palette }),
        },
      },
      breakpoints,
      components,
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
