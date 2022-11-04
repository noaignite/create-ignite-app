const overrides = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styleOverrides: {
    colorDefault: ({ theme }) => ({
      backgroundColor: theme.vars.palette.background.default,
      color: theme.vars.palette.text.primary,
    }),
  },
}

export default overrides
