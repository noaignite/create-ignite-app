// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { useAppHandlers } from '../AppContext'
import AppDrawer from './AppDrawer'

export const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.text.primary),
  },
  nav: theme.mixins.gutters(),
})

const AppCartMenu = React.forwardRef(function AppCartMenu(props, ref) {
  const { classes, open, ...other } = props

  const { onCartMenuClose, onCartMenuExited } = useAppHandlers()

  return (
    <AppDrawer
      classes={{ paper: classes.paper }}
      SlideProps={{ onExited: onCartMenuExited }}
      open={open}
      onClose={onCartMenuClose}
      anchor="right"
      ref={ref}
      {...other}
    >
      <nav className={classes.nav} aria-label="Cart navigation">
        Cart items...
      </nav>
    </AppDrawer>
  )
})

AppCartMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
}

AppCartMenu.uiName = 'AppCartMenu'

export default withStyles(styles)(React.memo(AppCartMenu))
