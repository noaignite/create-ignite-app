export { default } from '@mui/material/Container'

export const overrides = {
  styleOverrides: (theme) => ({
    root: {
      paddingLeft: 'var(--coa-container-spacing)',
      paddingRight: 'var(--coa-container-spacing)',
      [theme.breakpoints.up('sm')]: {
        paddingLeft: 'var(--coa-container-spacing)',
        paddingRight: 'var(--coa-container-spacing)',
      },
    },
  }),
}
