const overrides = {
  styleOverrides: (theme) => ({
    root: {
      ...theme.typography.input,
      lineHeight: '1.5em', // Adjust to center `FormLabel` to input.
    },
  }),
}

export default overrides
