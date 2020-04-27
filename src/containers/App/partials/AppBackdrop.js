import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import CircularProgress from '@material-ui/core/CircularProgress'
import Backdrop from 'components/Backdrop'

export const styles = theme => ({
  root: {
    zIndex: theme.zIndex.appBar - 1,
  },
})

const AppBackdrop = React.forwardRef(function AppBackdrop(props, ref) {
  const { classes, className, loading, open, ...other } = props

  return (
    <Backdrop
      className={classnames(classes.root, className)}
      open={open}
      unmountOnExit
      ref={ref}
      {...other}
    >
      {loading && <CircularProgress />}
    </Backdrop>
  )
})

AppBackdrop.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  loading: PropTypes.bool,
  open: PropTypes.bool,
}

AppBackdrop.uiName = 'AppBackdrop'

export default withStyles(styles)(React.memo(AppBackdrop))
