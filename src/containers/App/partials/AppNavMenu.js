// @inheritedComponent Drawer

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import { SITE_HEADER_ID } from 'src/site.config'
import { linkType } from 'utils'
import RouterLink from 'containers/RouterLink'
import Link from 'components/Link'
import { useAppContext } from '../AppContext'

export const styles = theme => ({
  root: {
    // Override inline `zIndex` set by Mui.
    zIndex: `${theme.zIndex.appBar - 1} !important`,
  },
  paper: {
    zIndex: theme.zIndex.appBar - 1,
    width: 414, // iPhone 6/7/8 Plus
    maxWidth: '100%',
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
  const { classes, className, menu = [], ...other } = props

  const { isNavMenuOpen, onNavMenuClose, onNavMenuExited } = useAppContext()

  return (
    <Drawer
      classes={{
        root: classnames(classes.root, className),
        paper: classnames(classes.paper, SITE_HEADER_ID),
      }}
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
                href="/[slug]"
                variant="h1"
              >
                {menuItem.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Drawer>
  )
})

AppNavMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  menu: PropTypes.arrayOf(linkType),
}

AppNavMenu.uiName = 'AppNavMenu'

export default withStyles(styles)(AppNavMenu)
