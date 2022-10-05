const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      backgroundColor: `rgba(${theme.vars.palette.text.primaryChannel} / 0.2)`,
    }),
    invisible: {
      backgroundColor: 'transparent',
    },
  },
}

export default overrides
