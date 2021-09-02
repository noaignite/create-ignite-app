const overrides = {
  styleOverrides: (theme) => ({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
      },
    },
  }),
}

export default overrides
