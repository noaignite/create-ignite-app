import { constants } from './extras'

export default function createMixins(breakpoints, spacing, mixins) {
  return {
    toolbar: {
      minHeight: constants.TOOLBAR_MIN_HEIGHT,
      [breakpoints.up('sm')]: {
        minHeight: constants.TOOLBAR_MIN_HEIGHT_RESPONSIVE,
      },
    },
    toolbarDense: {
      minHeight: constants.TOOLBAR_MIN_HEIGHT_DENSE,
    },
    // Utility mixins
    gutters: (unit = 2) => ({
      paddingLeft: spacing(unit),
      paddingRight: spacing(unit),
    }),
    contain: (breakpoint = 'lg') => ({
      maxWidth: breakpoints.values[breakpoint] || breakpoint,
      marginRight: 'auto',
      marginLeft: 'auto',
    }),
    absoluteCover: (unit = 0) => ({
      position: 'absolute',
      top: spacing(unit),
      right: spacing(unit),
      bottom: spacing(unit),
      left: spacing(unit),
    }),
    lineClamp: lines => ({
      display: '-webkit-box',
      WebkitBoxOrient: 'vertical',
      WebkitLineClamp: lines,
      overflow: 'hidden',
    }),
    scrollable: {
      overflowX: 'hidden',
      overflowY: 'auto',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch',
    },
    ...mixins,
  }
}
