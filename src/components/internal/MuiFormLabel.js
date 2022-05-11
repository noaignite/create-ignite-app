const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...theme.typography.inputText,
      lineHeight: '1.5em', // Adjust to center `FormLabel` to input.
    }),
  },
}

export default overrides
