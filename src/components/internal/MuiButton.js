const BORDER_WIDTH = 1
const PADDING_X = 24
const PADDING_Y = 16

const overrides = {
  defaultProps: {
    color: 'text',
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    sizeSmall: ({ theme }) => ({
      padding: `${PADDING_Y - 3}px ${PADDING_X - 6}px`,
      fontSize: theme.typography.pxToRem(11),
    }),
    sizeMedium: {
      padding: `${PADDING_Y}px ${PADDING_X}px`,
    },
    sizeLarge: {
      padding: `${PADDING_Y + 3}px ${PADDING_X + 6}px`,
    },
    outlinedSizeSmall: {
      padding: `${PADDING_Y - 3 - BORDER_WIDTH}px ${PADDING_X - 6 - BORDER_WIDTH}px`,
    },
    outlinedSizeMedium: {
      padding: `${PADDING_Y - BORDER_WIDTH}px ${PADDING_X - BORDER_WIDTH}px`,
    },
    outlinedSizeLarge: {
      padding: `${PADDING_Y + 3 - BORDER_WIDTH}px ${PADDING_X + 6 - BORDER_WIDTH}px`,
    },
  },
}

export default overrides
