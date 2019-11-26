import { fade } from '@material-ui/core/styles/colorManipulator'

export { default } from '@material-ui/core/IconButton'

export const styles = theme => ({
  root: {
    color: theme.palette.action.active,
    transition: theme.transitions.create(['background-color', 'color'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: 'transparent', // Disable Mui backgroundColor
      color: fade(theme.palette.action.active, 1 - theme.palette.action.hoverOpacity * 2),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        color: theme.palette.action.active,
      },
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
      color: fade(theme.palette.primary.main, 1 - theme.palette.action.hoverOpacity * 2),
    },
  },
  colorSecondary: {
    '&:hover': {
      backgroundColor: 'transparent',
      color: fade(theme.palette.secondary.main, 1 - theme.palette.action.hoverOpacity * 2),
    },
  },
})
