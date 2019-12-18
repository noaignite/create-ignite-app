// @inheritedComponent AppDrawer

import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { useAppContext } from '../AppContext'
import AppDrawer from './AppDrawer'

export const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.getContrastText(theme.palette.text.primary),
  },
  nav: theme.mixins.gutters(),
})

const AppCartMenu = React.forwardRef(function AppCartMenu(props, ref) {
  const { classes, ...other } = props

  const { isCartMenuOpen, onCartMenuClose, onCartMenuExited } = useAppContext()

  return (
    <AppDrawer
      classes={{ paper: classes.paper }}
      SlideProps={{ onExited: onCartMenuExited }}
      open={isCartMenuOpen}
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
}

AppCartMenu.uiName = 'AppCartMenu'

export default withStyles(styles)(AppCartMenu)
