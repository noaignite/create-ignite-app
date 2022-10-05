const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderRadius: 0,
      transition: theme.transitions.create(['background-color', 'color'], {
        duration: theme.transitions.duration.shortest,
      }),
      '&:hover': {
        backgroundColor: 'transparent', // Disable Mui backgroundColor
      },
    }),
    colorInherit: {
      '&:hover': {
        backgroundColor: 'transparent',
        color: 'inherit',
      },
    },
  },
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
