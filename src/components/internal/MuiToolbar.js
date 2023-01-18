const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 'var(--cia-toolbar-height)',
      // Breakpoint is needed to override internal MUI styles.
      [theme.breakpoints.up('sm')]: {
        minHeight: 'var(--cia-toolbar-height)',
      },
    }),
    gutters: ({ theme }) => ({
      paddingInline: 'var(--cia-toolbar-spacing)',
      // Breakpoint is needed to override internal MUI styles.
      [theme.breakpoints.up('sm')]: {
        paddingInline: 'var(--cia-toolbar-spacing)',
      },
    }),
    dense: {
      minHeight: 'var(--cia-toolbar-dense-height)',
    },
  },
}

export default overrides
