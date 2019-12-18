// @inheritedComponent Drawer

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Drawer from '@material-ui/core/Drawer'
import { SITE_HEADER_ID } from 'src/site.config'

const headerHeight = `var(--${SITE_HEADER_ID}-height)`

export const styles = {
  root: {
    top: `${headerHeight} !important`, // Override `MuiModal` inline style.
  },
  backdrop: {
    top: headerHeight,
  },
  paper: {
    top: headerHeight,
    width: 414, // iPhone 6/7/8 Plus
    maxWidth: '100%',
    height: `calc(100% - ${headerHeight})`,
  },
}

const AppDrawer = React.forwardRef(function AppDrawer(props, ref) {
  const {
    BackdropProps: { className: BackdropClassName, ...BackdropProps } = {},
    children,
    classes,
    PaperProps: { className: PaperClassName, ...PaperProps } = {},
    ...other
  } = props

  return (
    <Drawer
      classes={{
        root: classes.root,
        paper: classnames(classes.paper, PaperClassName),
      }}
      BackdropProps={{
        className: classnames(classes.backdrop, BackdropClassName),
        ...BackdropProps,
      }}
      PaperProps={PaperProps}
      ref={ref}
      {...other}
    >
      {children}
    </Drawer>
  )
})

AppDrawer.propTypes = {
  BackdropProps: PropTypes.object,
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  PaperProps: PropTypes.object,
}

AppDrawer.uiName = 'AppDrawer'

export default withStyles(styles)(AppDrawer)
