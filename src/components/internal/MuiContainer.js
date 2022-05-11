const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingLeft: 'var(--cia-container-spacing)',
      paddingRight: 'var(--cia-container-spacing)',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 'var(--cia-container-spacing)',
        paddingRight: 'var(--cia-container-spacing)',
      },
    }),
  },
}

export default overrides
