import grey from '../colors/grey'
import { constants } from './extras'

export default function createMixins(breakpoints, spacing, mixins) {
  // eslint-disable-next-line no-shadow
  function position(position, ...args) {
    const keys = ['top', 'right', 'bottom', 'left']
    const map = [
      [0, 0, 0, 0],
      [0, 1, 0, 1],
      [0, 1, 2, 1],
      [0, 1, 2, 3],
    ]

    if (args.length === 0) {
      args = [0, 0, 0, 0]
    }

    const styles = { position }
    keys.forEach((key, idx) => {
      styles[key] = args[map[args.length - 1][idx]]
    })

    return styles
  }

  return {
    // Mui mixins
    gutters: (amount = 2) => ({
      paddingLeft: spacing(amount),
      paddingRight: spacing(amount),
    }),
    toolbar: {
      minHeight: constants.TOOLBAR_MIN_HEIGHT,
      [breakpoints.up('sm')]: {
        minHeight: constants.TOOLBAR_MIN_HEIGHT_RESPONSIVE,
      },
    },
    toolbarDense: {
      minHeight: constants.TOOLBAR_MIN_HEIGHT_DENSE,
    },
    // Custom mixins
    fluidType: (minBreakpoint, maxBreakpoint, minFontSize, maxFontSize) => {
      const minVw = breakpoints.values[minBreakpoint] || minBreakpoint
      const maxVw = breakpoints.values[maxBreakpoint] || maxBreakpoint

      return {
        fontSize: minFontSize,
        [`@media (min-width: ${minVw}px)`]: {
          fontSize: `calc(${minFontSize}px + ${
            maxFontSize - minFontSize
          } * ((100vw - ${minVw}px) / ${maxVw - minVw}))`,
        },
        [`@media (min-width: ${maxVw}px)`]: {
          fontSize: maxFontSize,
        },
      }
    },
    horizontalRhythm: (amount = 1, selector = '*') => ({
      [`& > ${selector} + ${selector}`]: {
        marginLeft: spacing(amount),
      },
    }),
    verticalRhythm: (amount = 1, selector = '*') => ({
      [`& > ${selector} + ${selector}`]: {
        marginTop: spacing(amount),
      },
    }),
    absolute: (...args) => {
      return position('absolute', ...args)
    },
    fixed: (...args) => {
      return position('fixed', ...args)
    },
    sticky: (...args) => {
      return position('sticky', ...args)
    },
    contain: (breakpoint = 'lg') => ({
      maxWidth: breakpoints.values[breakpoint] || breakpoint,
      marginRight: 'auto',
      marginLeft: 'auto',
    }),
    lineClamp: (lines) => ({
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
    scrollbars: {
      '&::-webkit-scrollbar': {
        width: 5,
        padding: 10,
        backgroundColor: grey[200],
      },
      '&::-webkit-scrollbar-thumb': {
        padding: 10,
        margin: 10,
        borderRadius: 4,
        backgroundColor: grey[800],
      },
    },
    ...mixins,
  }
}
