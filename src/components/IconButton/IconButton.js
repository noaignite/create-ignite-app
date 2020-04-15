import { fade } from '@material-ui/core/styles/colorManipulator'

export { default } from '@material-ui/core/IconButton'

const MD_PADDING = 12
const SM_PADDING = 6

export const styles = theme => ({
  root: {
    padding: MD_PADDING,
    borderRadius: 0,
    color: theme.palette.action.active,
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: 'transparent', // Disable Mui backgroundColor
      color: fade(theme.palette.action.active, 1 - theme.palette.action.activatedOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        color: theme.palette.action.active,
      },
    },
  },
  edgeStart: {
    marginLeft: -MD_PADDING,
    '$sizeSmall&': {
      marginLeft: -SM_PADDING,
    },
  },
  edgeEnd: {
    marginRight: -MD_PADDING,
    '$sizeSmall&': {
      marginRight: -SM_PADDING,
    },
  },
  colorInherit: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'inherit',
    },
  },
  colorPrimary: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: fade(theme.palette.primary.main, 1 - theme.palette.action.activatedOpacity),
    },
  },
  colorSecondary: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: fade(theme.palette.secondary.main, 1 - theme.palette.action.activatedOpacity),
    },
  },
  sizeSmall: {
    padding: SM_PADDING,
  },
})
