const BORDER_WIDTH = 1
const PADDING_X = 27
const PADDING_Y = 17

const overrides = {
  defaultProps: {
    color: 'text',
    disableElevation: true,
  },
  styleOverrides: (theme) => ({
    text: {
      padding: `${PADDING_Y}px ${PADDING_X}px`,
    },
    outlined: {
      padding: `${PADDING_Y - BORDER_WIDTH}px ${PADDING_X - BORDER_WIDTH}px`,
    },
    contained: {
      padding: `${PADDING_Y}px ${PADDING_X}px`,
    },
    textSizeSmall: {
      padding: `${PADDING_Y - 5}px ${PADDING_X - 10}px`,
      fontSize: theme.typography.pxToRem(12),
    },
    textSizeLarge: {
      padding: `${PADDING_Y + 5}px ${PADDING_X + 10}px`,
      fontSize: theme.typography.button.fontSize,
    },
    outlinedSizeSmall: {
      padding: `${PADDING_Y - 5 - BORDER_WIDTH}px ${PADDING_X - 10 - BORDER_WIDTH}px`,
      fontSize: theme.typography.pxToRem(12),
    },
    outlinedSizeLarge: {
      padding: `${PADDING_Y + 5 - BORDER_WIDTH}px ${PADDING_X + 10 - BORDER_WIDTH}px`,
      fontSize: theme.typography.button.fontSize,
    },
    containedSizeSmall: {
      padding: `${PADDING_Y - 5}px ${PADDING_X - 10}px`,
      fontSize: theme.typography.pxToRem(12),
    },
    containedSizeLarge: {
      padding: `${PADDING_Y + 5}px ${PADDING_X + 10}px`,
      fontSize: theme.typography.button.fontSize,
    },
  }),
}

export default overrides
