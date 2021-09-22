const overrides = {
  styleOverrides: (theme) => ({
    root: {
      '&$focused $notchedOutline': {
        borderColor: theme.palette.text.primary,
      },
    },
  }),
}

export default overrides
