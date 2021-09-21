const overrides = {
  styleOverrides: (theme) => ({
    root: {
      '--menu-item-min-height': '48px',
      width: '100%',
      minHeight: 'var(--menu-item-min-height)',
      [theme.breakpoints.up('sm')]: {
        minHeight: 'var(--menu-item-min-height)',
      },
    },
  }),
}

export default overrides
