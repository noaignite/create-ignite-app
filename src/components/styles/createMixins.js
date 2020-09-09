import grey from '../colors/grey'

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
    // Components
    toolbar: {
      '--toolbar-min-height': '56px',
      minHeight: 'var(--toolbar-min-height)',
      [breakpoints.up('sm')]: {
        '--toolbar-min-height': '64px',
      },
    },
    toolbarDense: {
      '--toolbar-min-height': '48px',
      minHeight: 'var(--toolbar-min-height)',
    },
    section: (spacingType = 'margin') => ({
      '--section-spacing': `${spacing(4)}px`,
      [`${spacingType}Top`]: 'var(--section-spacing)',
      [`${spacingType}Bottom`]: 'var(--section-spacing)',
      [breakpoints.up('sm')]: {
        '--section-spacing': `${spacing(6)}px`,
      },
    }),
    container: {
      '--container-spacing': `${spacing(2)}px`,
      paddingLeft: 'var(--container-spacing)',
      paddingRight: 'var(--container-spacing)',
      [breakpoints.up('sm')]: {
        '--container-spacing': `${spacing(3)}px`,
        paddingLeft: 'var(--container-spacing)', // Override Mui styles
        paddingRight: 'var(--container-spacing)', // Override Mui styles
      },
    },
    // Utils
    gutters: (amount = 2) => ({
      paddingLeft: spacing(amount),
      paddingRight: spacing(amount),
    }),
    contain: (breakpoint = 'lg') => ({
      maxWidth: breakpoints.values[breakpoint] || breakpoint,
      marginRight: 'auto',
      marginLeft: 'auto',
    }),
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
