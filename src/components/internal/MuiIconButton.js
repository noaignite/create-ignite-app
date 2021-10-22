import { alpha } from '@mui/material/styles'

const overrides = {
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
        color: alpha(theme.palette.primary.main, 1 - theme.palette.action.activatedOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          color: theme.palette.primary.main,
        },
      },
    },
    colorSecondary: {
      '&:hover': {
        color: alpha(theme.palette.secondary.main, 1 - theme.palette.action.activatedOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          color: theme.palette.secondary.main,
        },
      },
    },
  }),
  // Below patches faulty negative margins set on `IconButton`.
  // Github issue: https://github.com/mui-org/material-ui/issues/28546
  variants: [
    { props: { edge: 'start', size: 'medium' }, style: { marginLeft: -8 } },
    { props: { edge: 'start', size: 'small' }, style: { marginLeft: -5 } },
    { props: { edge: 'end', size: 'medium' }, style: { marginRight: -8 } },
    { props: { edge: 'end', size: 'small' }, style: { marginRight: -5 } },
  ],
}

export default overrides
