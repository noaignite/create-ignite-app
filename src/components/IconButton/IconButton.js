import { alpha } from '@mui/material/styles'

export { default } from '@mui/material/IconButton'

export const overrides = {
  styleOverrides: (theme) => ({
    root: {
      borderRadius: 0,
      transition: theme.transitions.create('color', {
        duration: theme.transitions.duration.shortest,
      }),
      '&:hover': {
        backgroundColor: 'transparent', // Disable Mui backgroundColor
        color: alpha(theme.palette.action.active, 1 - theme.palette.action.activatedOpacity),
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
        backgroundColor: 'transparent', // Disable Mui backgroundColor
        color: alpha(theme.palette.primary.main, 1 - theme.palette.action.activatedOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          color: theme.palette.primary.main,
        },
      },
    },
    colorSecondary: {
      '&:hover': {
        backgroundColor: 'transparent', // Disable Mui backgroundColor
        color: alpha(theme.palette.secondary.main, 1 - theme.palette.action.activatedOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          color: theme.palette.secondary.main,
        },
      },
    },
  }),
}
