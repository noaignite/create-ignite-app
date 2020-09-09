import * as React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import Slide from '@material-ui/core/Slide'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from 'components/Button'
import Typography from 'components/Typography'
import { useAppHandlers } from '../AppContext'

export const styles = (theme) => ({
  root: theme.mixins.fixed(undefined, 0, 0),
  content: {
    flexGrow: 1,
    padding: theme.spacing(1, 4),
    border: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.getContrastText(theme.palette.text.primary),
  },
  message: {
    maxWidth: 830,
  },
})

const AppCookieBar = React.forwardRef(function AppCookieBar(props, ref) {
  const { classes, open, ...other } = props

  const { onCookieBarClose } = useAppHandlers()

  return (
    <Snackbar
      className={classes.root}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      TransitionComponent={Slide}
      open={open}
      ref={ref}
      {...other}
    >
      <SnackbarContent
        className={classes.content}
        classes={{
          root: classes.content,
          message: classes.message,
        }}
        message={
          <Typography color="inherit" variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie varius viverra.
            Quisque urna tortor, bibendum ac quam a, bibendum fringilla nulla.
          </Typography>
        }
        action={
          <Button onClick={onCookieBarClose} color="primary" size="small" variant="contained">
            Accept cookies
          </Button>
        }
      />
    </Snackbar>
  )
})

AppCookieBar.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
}

export default withStyles(styles)(React.memo(AppCookieBar))
