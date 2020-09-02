import { fade } from '@material-ui/core/styles/colorManipulator'

export { default } from '@material-ui/core/Button'

const BORDER_WIDTH = 1
const PADDING_X = 27
const PADDING_Y = 17

export const styles = (theme) => ({
  text: {
    padding: `${PADDING_Y}px ${PADDING_X}px`,
  },
  outlined: {
    padding: `${PADDING_Y - BORDER_WIDTH}px ${PADDING_X - BORDER_WIDTH}px`,
  },
  contained: {
    padding: `${PADDING_Y}px ${PADDING_X}px`,
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),
    '&:hover': {
      backgroundColor: fade(theme.palette.text.primary, 1 - theme.palette.action.activatedOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.text.primary,
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
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
})
