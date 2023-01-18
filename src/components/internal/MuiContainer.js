const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingInline: 'var(--cia-container-spacing)',
      // Breakpoint is needed to override internal MUI styles.
      [theme.breakpoints.up('sm')]: {
        paddingInline: 'var(--cia-container-spacing)',
      },
    }),
  },
}

export default overrides
