import { deepmerge } from '@mui/utils'
import { alpha, colors } from '@mui/material'
import common from '../colors/common'

// Dynamic colors meant to alternate between light/dark theme modes are added here.
export const light = {
  // The colors used to represent default interface elements for a user.
  default: {
    light: common.black,
    main: common.black,
    dark: common.black,
    contrastText: common.white,
  },
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: common.black,
    // Secondary text.
    secondary: alpha(common.black, 0.65),
    // Disabled text have even lower visual prominence.
    disabled: alpha(common.black, 0.4),
  },
  // The color used to divide different elements.
  divider: alpha(common.black, 0.12),
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    default: common.white,
    paper: colors.grey[50],
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: common.black,
    // The background color of an hovered action.
    hover: alpha(common.black, 0.04),
    hoverOpacity: 0.04,
    // The background color of a selected action.
    selected: alpha(common.black, 0.08),
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: alpha(common.black, 0.26),
    // The background color of a disabled action.
    disabledBackground: alpha(common.black, 0.12),
    disabledOpacity: 0.38,
    focus: alpha(common.black, 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

export const dark = {
  default: {
    light: common.white,
    main: common.white,
    dark: common.white,
    contrastText: common.black,
  },
  text: {
    primary: common.white,
    secondary: alpha(common.white, 0.65),
    disabled: alpha(common.white, 0.4),
  },
  divider: alpha(common.white, 0.12),
  background: {
    default: common.black,
    paper: colors.grey[900],
  },
  action: {
    active: common.white,
    hover: alpha(common.white, 0.04),
    hoverOpacity: 0.04,
    selected: alpha(common.white, 0.08),
    selectedOpacity: 0.08,
    disabled: alpha(common.white, 0.26),
    disabledBackground: alpha(common.white, 0.12),
    disabledOpacity: 0.38,
    focus: alpha(common.white, 0.12),
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
}

export default function createPalette(palette) {
  // Static colors that do not alternate between light/dark theme modes are added here.
  const {
    primary = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      main: colors.blue[500],
    },
    error = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      main: colors.red[500],
    },
    warning = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      main: colors.orange[500],
    },
    info = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      main: colors.cyan[500],
    },
    success = {
      // `light`, `dark` & `contrastText` are automatically calculated if not defined.
      main: colors.green[500],
    },
    grey = colors.grey,
    modes = { dark, light },
    mode = 'light',
    contrastThreshold = 3,
    tonalOffset = 0.2,
    ...other
  } = palette

  const paletteOutput = deepmerge(
    {
      // A collection of common colors.
      common,
      // The palette mode, can be light or dark.
      mode,
      // The colors used to represent primary interface elements for a user.
      primary,
      // The colors used to represent interface elements that the user should be made aware of.
      error,
      // The colors used to represent potentially dangerous actions or important messages.
      warning,
      // The colors used to present information to the user that is neutral and not necessarily important.
      info,
      // The colors used to indicate the successful completion of an action that user triggered.
      success,
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
      ...modes[mode],
    },
    other,
  )

  return paletteOutput
}
