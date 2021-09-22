const overrides = {
  styleOverrides: (theme) => ({
    gutters: {
      paddingLeft: 'var(--cia-toolbar-spacing)',
      paddingRight: 'var(--cia-toolbar-spacing)',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 'var(--cia-toolbar-spacing)',
        paddingRight: 'var(--cia-toolbar-spacing)',
      },
    },
    regular: theme.mixins.toolbar,
    dense: theme.mixins.toolbarDense,
  }),
}

export default overrides
