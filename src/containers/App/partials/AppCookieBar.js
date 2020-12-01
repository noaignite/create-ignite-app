import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Slide from '@material-ui/core/Slide'
import Snackbar from '@material-ui/core/Snackbar'
import SnackbarContent from '@material-ui/core/SnackbarContent'
import Button from 'components/Button'
import Typography from 'components/Typography'

export const useStyles = makeStyles((theme) => ({
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
}))

const AppCookieBar = React.memo(function AppCookieBar(props) {
  const { className, onClose, open, ...other } = props
  const classes = useStyles(props)

  return (
    <Snackbar
      className={classnames(classes.root, className)}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      TransitionComponent={Slide}
      open={open}
      {...other}
    >
      <SnackbarContent
        classes={{
          root: classes.content,
          message: classes.message,
          action: 'mui-fixed',
        }}
        message={
          <Typography color="inherit" variant="caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In molestie varius viverra.
            Quisque urna tortor, bibendum ac quam a, bibendum fringilla nulla.
          </Typography>
        }
        action={
          <Button onClick={onClose} color="primary" size="small" variant="contained">
            Accept cookies
          </Button>
        }
      />
    </Snackbar>
  )
})

AppCookieBar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
}

export default AppCookieBar
