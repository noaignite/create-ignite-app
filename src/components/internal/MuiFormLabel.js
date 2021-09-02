const overrides = {
  styleOverrides: (theme) => ({
    root: {
      ...theme.typography.input,
      '&$focused': {
        color: theme.palette.text.primary,
      },
    },
  }),
}

export default overrides
