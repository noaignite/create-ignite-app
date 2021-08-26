const overrides = {
  styles: (theme) => ({
    underline: {
      '&:after': {
        borderBottom: `2px solid ${theme.palette.text.primary}`,
      },
    },
  }),
}

export default overrides
