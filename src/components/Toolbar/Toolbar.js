export { default } from '@material-ui/core/Toolbar'

export const styles = (theme) => ({
  gutters: {
    ...theme.mixins.gutters(),
    // Disable MUI responsive gutters.
    [theme.breakpoints.up('sm')]: theme.mixins.gutters(),
  },
  regular: theme.mixins.toolbar,
  dense: theme.mixins.toolbarDense,
})
