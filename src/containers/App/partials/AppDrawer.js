// @inheritedComponent Drawer

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
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

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const { classes, className, menu = [], ...other } = props

  const { isMenuOpen, onMenuClose, onMenuExited } = useAppContext()

  return (
    <Drawer
      classes={{
        root: classnames(classes.root, className),
        paper: classes.paper,
      }}
      SlideProps={{ onExited: onMenuExited }}
      open={isMenuOpen}
      onClose={onMenuClose}
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

AppDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  menu: PropTypes.arrayOf(linkType),
}

AppDrawer.uiName = 'AppDrawer'

export default withStyles(styles)(AppDrawer)
