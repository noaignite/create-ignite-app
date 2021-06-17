import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Snackbar from '@material-ui/core/Snackbar'
import { useI18n } from 'api'
import CloseIcon from 'components/icons/Close'
import IconButton from 'components/IconButton'
import Typography from 'components/Typography'

export const useStyles = makeStyles((theme) => ({
  root: {
    left: 'auto',
    right: 0,
    bottom: 0,
    [theme.breakpoints.up('sm')]: {
      maxWidth: '50%',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '25%',
    },
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    padding: 'var(--coa-toolbar-spacing)',
    margin: 'var(--coa-toolbar-spacing)',
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.background.default,
  },
}))

const AppCookieBar = React.memo(function AppCookieBar(props) {
  const { className, onClose, open, ...other } = props
  const classes = useStyles(props)

  const { t } = useI18n()

  return (
    <Snackbar
      className={clsx(classes.root, className)}
      anchorOrigin={{
        horizontal: 'right',
        vertical: 'bottom',
      }}
      open={open}
      {...other}
    >
      <div className={classes.content}>
        <Typography variant="body2">
          {t(
            __translationGroup,
          )`We use cookies to give you the best user experience. By using our website you agree to our privacy policy.`}
        </Typography>

        <IconButton
          onClick={onClose}
          color="inherit"
          edge="end"
          size="small"
          aria-label={t(__translationGroup)`Close cookie bar`}
        >
          <CloseIcon />
        </IconButton>
      </div>
    </Snackbar>
  )
})

AppCookieBar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool,
}

export default AppCookieBar
