const overrides = {
  styleOverrides: {
    root: ({ theme, ownerState }) => ({
      ...(!ownerState.disableGutters && {
        paddingInline: 'var(--cia-container-spacing)',
        [theme.breakpoints.up('sm')]: {
          paddingInline: 'var(--cia-container-spacing)',
        },
      }),
    }),
  },
}

export default overrides
