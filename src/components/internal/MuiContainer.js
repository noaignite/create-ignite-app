const overrides = {
  styleOverrides: (theme) => ({
    root: {
      paddingLeft: 'var(--cia-container-spacing)',
      paddingRight: 'var(--cia-container-spacing)',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 'var(--cia-container-spacing)',
        paddingRight: 'var(--cia-container-spacing)',
      },
    },
  }),
}

export default overrides
