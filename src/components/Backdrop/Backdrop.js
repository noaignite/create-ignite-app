import { fade } from '@material-ui/core/styles/colorManipulator'

export { default } from '@material-ui/core/Backdrop'

export const styles = (theme) => ({
  root: {
    backgroundColor: fade(theme.palette.text.primary, 0.5),
  },
})
