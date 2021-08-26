import { alpha } from '@material-ui/core/styles'

export { default } from '@material-ui/core/Backdrop'

export const styles = (theme) => ({
  root: {
    backgroundColor: alpha(theme.palette.text.primary, 0.2),
  },
})
