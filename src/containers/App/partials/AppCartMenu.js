// @inheritedComponent Drawer

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import { SITE_HEADER_ID } from 'src/site.config'
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
  nav: theme.mixins.gutters(),
})

const AppCartMenu = React.forwardRef(function AppCartMenu(props, ref) {
  const { classes, className, ...other } = props

  const { isCartMenuOpen, onCartMenuClose, onCartMenuExited } = useAppContext()

  return (
    <Drawer
      classes={{
        root: classnames(classes.root, className),
        paper: classnames(classes.paper, SITE_HEADER_ID),
      }}
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
    </Drawer>
  )
})

AppCartMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

AppCartMenu.uiName = 'AppCartMenu'

export default withStyles(styles)(AppCartMenu)
