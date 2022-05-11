const overrides = {
  styleOverrides: {
    gutters: ({ theme }) => ({
      paddingLeft: 'var(--cia-toolbar-spacing)',
      paddingRight: 'var(--cia-toolbar-spacing)',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 'var(--cia-toolbar-spacing)',
        paddingRight: 'var(--cia-toolbar-spacing)',
      },
    }),
    dense: {
      minHeight: 'var(--cia-toolbar-dense-min-height)',
    },
  },
}

export default overrides
