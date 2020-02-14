// @inheritedComponent AppDrawer

import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { menuLinkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import Link from 'components/Link'
import { useAppContext } from '../AppContext'
import AppDrawer from './AppDrawer'

export const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.getContrastText(theme.palette.text.primary),
  },
  nav: {
    margin: 'auto 0',
  },
  navlist: theme.mixins.gutters(),
  navlistItem: {},
  navlistItemText: {},
})

const AppNavMenu = React.forwardRef(function AppNavMenu(props, ref) {
  const { classes, menu = [], ...other } = props

  const { isNavMenuOpen, onNavMenuClose, onNavMenuExited } = useAppContext()

  return (
    <AppDrawer
      classes={{ paper: classes.paper }}
      SlideProps={{ onExited: onNavMenuExited }}
      open={isNavMenuOpen}
      onClose={onNavMenuClose}
      anchor="right"
      ref={ref}
      {...other}
    >
      <nav className={classes.nav} aria-label="Main navigation">
        <ul className={classes.navlist}>
          {menu.map((menuItem, idx) => (
            <li key={idx} className={classes.navlistItem}>
              <Link
                className={classes.navlistItemText}
                component={RouterLink}
                as={menuItem.href}
                href="/[...uri]"
                variant="h1"
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </AppDrawer>
  )
})

AppNavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  menu: PropTypes.arrayOf(menuLinkType),
}

AppNavMenu.uiName = 'AppNavMenu'

export default withStyles(styles)(AppNavMenu)
