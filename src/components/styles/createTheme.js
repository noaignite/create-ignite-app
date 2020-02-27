import { deepmerge } from '@material-ui/utils'
import createBreakpoints from './createBreakpoints'
import createMixins from './createMixins'
import createOverrides from './createOverrides'
import createPalette from './createPalette'
import createSpacing from './createSpacing'
import createTypography from './createTypography'
import extras from './extras'
import props from './props'
import shadows from './shadows'
import shape from './shape'
import transitions from './transitions'
import zIndex from './zIndex'

/**
 * The `createTheme` setup mimics the Material-UI `createMuiTheme` setup.
 *
 * Having a custom setup allows the following:
 * - Switching between custom light/dark pallete objects.
 * - Custom mixins having access to `breakpoints` and `spacing`.
 * - Custom overrides having access to the `theme` object.
 */
export default function createTheme(options = {}) {
  const {
    breakpoints: breakpointsInput = {},
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    typography: typographyInput = {},
    ...other
  } = options

  const breakpoints = createBreakpoints(breakpointsInput)
  const palette = createPalette(paletteInput)
  const spacing = createSpacing(spacingInput)

  const theme = deepmerge(
    {
      breakpoints,
      direction: 'ltr',
      extras,
      mixins: createMixins(breakpoints, spacing, mixinsInput),
      palette,
      props,
      shadows,
      shape,
      spacing,
      transitions,
      typography: createTypography(palette, typographyInput),
      zIndex,
    },
    other,
  )

  // Create the overrides with the complete theme object
  theme.overrides = createOverrides(theme)

  return theme
}
