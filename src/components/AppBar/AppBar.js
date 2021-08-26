export { default } from '@material-ui/core/AppBar'

export const overrides = {
  defaultProps: {
    color: 'default',
    elevation: 0,
  },
  styles: (theme) => ({
    colorDefault: {
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
    },
  }),
}
