import { deepmerge } from '@material-ui/utils'
import createMuiPalette from '@material-ui/core/styles/createPalette'
import { fade } from '@material-ui/core/styles/colorManipulator'
import blue from '../colors/blue'
import blueGrey from '../colors/blueGrey'
import common from '../colors/common'
import grey from '../colors/grey'
import red from '../colors/red'

export const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: common.black,
    // Secondary text.
    secondary: fade(common.black, 0.65),
    // Disabled text have even lower visual prominence.
    disabled: fade(common.black, 0.4),
    // Text hints.
    hint: fade(common.black, 0.4),
  },
  // The color used to divide different elements.
  divider: common.black,
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    default: common.white,
    paper: common.white,
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: common.black,
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
  },
}

export const dark = {
  text: {
    primary: common.white,
    secondary: fade(common.white, 0.65),
    disabled: fade(common.white, 0.4),
    hint: fade(common.white, 0.4),
  },
  divider: common.white,
  background: {
    default: common.black,
    paper: common.black,
  },
  action: {
    active: common.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
  },
}

export default function createPalette(palette) {
  const {
    primary = {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700],
    },
    secondary = {
      light: blue[300],
      main: blue[500],
      dark: blue[700],
    },
    error = {
      light: red[300],
      main: red[500],
      dark: red[700],
    },
    type = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette

  const types = { dark, light }

  const paletteOutput = deepmerge(
    {
      // A collection of common colors.
      common,
      // The palette type, can be light or dark.
      type,
      // The colors used to represent primary interface elements for a user.
      primary,
      // The colors used to represent secondary interface elements for a user.
      secondary,
      // The colors used to represent interface elements that the user should be made aware of.
      error,
      // The grey colors.
      grey,
      // Used by `getContrastText()` to maximize the contrast between the background and
      // the text.
      contrastThreshold,
      // Used by the functions below to shift a color's luminance by approximately
      // two indexes within its tonal palette.
      // E.g., shift from Red 500 to Red 300 or Red 700.
      tonalOffset,
      // The light and dark type object.
      ...types[type],
    },
    other,
  )

  // Lastly patch the palette with missing data as our other theme creators
  // expect the palette object to be complete.
  return createMuiPalette(paletteOutput)
}
