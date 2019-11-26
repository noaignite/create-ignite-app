import createMuiBreakpoints from '@material-ui/core/styles/createBreakpoints'

export { keys } from '@material-ui/core/styles/createBreakpoints'

export default function createBreakpoints(breakpoints) {
  const {
    // Non exportable `values` object as these would would no longer be
    // correct if passed other values to the `createTheme` function.
    values = {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
    ...other
  } = breakpoints

  return createMuiBreakpoints({ values, ...other })
}
