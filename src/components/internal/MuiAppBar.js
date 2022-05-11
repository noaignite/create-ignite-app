const overrides = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styleOverrides: {
    colorDefault: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    }),
  },
}

export default overrides
