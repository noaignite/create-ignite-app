import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Backdrop from 'components/Backdrop'
import CircularProgress from 'components/CircularProgress'
import { useAppContext } from '../AppContext'

export const styles = theme => ({
  root: {
    zIndex: theme.zIndex.appBar - 1,
  },
})

const AppBackdrop = React.forwardRef(function AppBackdrop(props, ref) {
  const { classes, className, ...other } = props

  const { isBackdropOpen, isLoading } = useAppContext()

  return (
    <Backdrop
      className={classnames(classes.root, className)}
      open={isBackdropOpen}
      unmountOnExit
      ref={ref}
      {...other}
    >
      {isLoading && <CircularProgress />}
    </Backdrop>
  )
})

AppBackdrop.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

AppBackdrop.uiName = 'AppBackdrop'

export default withStyles(styles)(AppBackdrop)
