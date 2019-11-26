import deepmerge from '@oakwood/oui-utils/deepmerge'
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

  const themeOutput = deepmerge(
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
  themeOutput.overrides = createOverrides(themeOutput)

  return themeOutput
}
