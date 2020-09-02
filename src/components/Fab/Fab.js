export { default } from '@material-ui/core/Fab'

export const styles = (theme) => ({
  root: {
    boxShadow: theme.shadows[3],
    '&:active': {
      boxShadow: theme.shadows[6],
    },
    '&$focusVisible': {
      boxShadow: theme.shadows[3],
    },
  },
})
