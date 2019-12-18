import { fade } from '@material-ui/core/styles/colorManipulator'

export { default } from '@material-ui/core/Button'

const borderWidth = 1
const xPadding = 30
const yPadding = 20

export const styles = theme => ({
  text: {
    padding: `${yPadding}px ${xPadding}px`,
  },
  outlined: {
    padding: `${yPadding - borderWidth}px ${xPadding - borderWidth}px`,
  },
  contained: {
    padding: `${yPadding}px ${xPadding}px`,
    color: theme.palette.getContrastText(theme.palette.text.primary),
    backgroundColor: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: fade(theme.palette.text.primary, 1 - theme.palette.action.hoverOpacity * 2),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.palette.text.primary,
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
  },
  // All variants share size modifiers
  sizeSmall: {
    padding: `${yPadding - 3}px ${xPadding - 3}px`,
    fontSize: theme.typography.pxToRem(10),
  },
  sizeLarge: {
    padding: `${yPadding + 3}px ${xPadding + 3}px`,
    fontSize: theme.typography.pxToRem(14),
  },
})
