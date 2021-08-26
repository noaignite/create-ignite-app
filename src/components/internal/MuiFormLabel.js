const overrides = {
  styles: (theme) => ({
    root: {
      ...theme.typography.input,
      '&$focused': {
        color: theme.palette.text.primary,
      },
    },
  }),
}

export default overrides
