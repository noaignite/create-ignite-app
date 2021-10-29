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
      // Override Mui styles
      minHeight: 'var(--cia-toolbar-min-height)',
      [breakpoints.up('sm')]: {
        minHeight: 'var(--cia-toolbar-min-height)',
      },
    },
    toolbarDense: {
      // Override Mui styles
      minHeight: 'var(--cia-toolbar-dense-min-height)',
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
    // Higher CSS specificity is needed, hence the `:not(style)` selector is needed.
    // https://github.com/mui-org/material-ui/issues/26384#issuecomment-844890584
    horizontalRhythm: (amount = 1, selector = ':not(style)') => ({
      [`& > ${selector} + ${selector}`]: {
        marginLeft: spacing(amount),
      },
    }),
    // Higher CSS specificity is needed, hence the `:not(style)` selector is needed.
    // https://github.com/mui-org/material-ui/issues/26384#issuecomment-844890584
    verticalRhythm: (amount = 1, selector = ':not(style)') => ({
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
      const minFs = minFontSize.fontSize || minFontSize
      const maxFs = maxFontSize.fontSize || maxFontSize

      return {
        fontSize: minFs,
        [`@media (min-width: ${minVw}px)`]: {
          fontSize: `calc(${minFs}px + ${maxFs - minFs} * ((100vw - ${minVw}px) / ${
            maxVw - minVw
          }))`,
        },
        [`@media (min-width: ${maxVw}px)`]: {
          fontSize: maxFs,
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
      overscrollBehaviorY: 'contain',
      overflowX: 'hidden',
      overflowY: 'auto',
      // Add iOS momentum scrolling.
      WebkitOverflowScrolling: 'touch',
    },
    scrollbars: {
      '&::-webkit-scrollbar': {
        width: 5,
        backgroundColor: grey[200],
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: grey[800],
      },
    },
    ...mixins,
  }
}
