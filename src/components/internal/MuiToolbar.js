const overrides = {
  styleOverrides: (theme) => ({
    gutters: {
      paddingLeft: 'var(--coa-toolbar-spacing)',
      paddingRight: 'var(--coa-toolbar-spacing)',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 'var(--coa-toolbar-spacing)',
        paddingRight: 'var(--coa-toolbar-spacing)',
      },
    },
    regular: theme.mixins.toolbar,
    dense: theme.mixins.toolbarDense,
  }),
}

export default overrides
