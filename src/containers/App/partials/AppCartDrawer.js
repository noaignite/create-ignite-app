// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CartList from 'containers/CartList'
import RouterLink from 'containers/RouterLink'
import CloseIcon from 'components/icons/Close'
import Button from 'components/Button'
import IconButton from 'components/IconButton'
import Toolbar from 'components/Toolbar'
import Typography from 'components/Typography'
import { useApp } from '../AppContext'
import AppDrawer from './AppDrawer'

export const useStyles = makeStyles((theme) => ({
  root: {},
  menuToolbar: {
    position: 'sticky',
    zIndex: theme.zIndex.appBar,
    top: 0,
    backgroundColor: theme.palette.background.paper,
  },
  menuButton: {
    marginLeft: 'auto',
  },
  menuLabel: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  list: {
    flexGrow: 1,
  },
  footer: {
    position: 'sticky',
    bottom: 0,
    /**
     * ⚠️ Firefox bug: "Position: sticky doesn't work properly with flexbox"
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1488080
     */
    '@supports (-moz-appearance:none)': {
      position: 'static',
    },
  },
}))

const AppCartDrawer = React.memo(function AppCartDrawer(props) {
  const { isCartMenuOpen, onCartMenuClose, ...other } = props
  const classes = useStyles(props)

  return (
    <AppDrawer
      classes={{ root: classes.root }}
      onClose={onCartMenuClose}
      open={isCartMenuOpen}
      anchor="right"
      {...other}
    >
      <Toolbar className={classes.menuToolbar}>
        <IconButton
          className={classes.menuButton}
          onClick={onCartMenuClose}
          edge="end"
          aria-label="Close cart menu"
        >
          <CloseIcon />
        </IconButton>

        <Typography className={classes.menuLabel} component="h1" variant="h4">
          Checkout
        </Typography>
      </Toolbar>

      <CartList className={classes.list} />

      <div className={classes.footer}>
        <Button component={RouterLink} href="/checkout" variant="contained" fullWidth>
          To checkout
        </Button>
      </div>
    </AppDrawer>
  )
})

AppCartDrawer.propTypes = {
  isCartMenuOpen: PropTypes.bool,
  onCartMenuClose: PropTypes.func,
}

function AppCartDrawerContainer(props) {
  const { isCartMenuOpen, onCartMenuClose } = useApp()

  return (
    <AppCartDrawer isCartMenuOpen={isCartMenuOpen} onCartMenuClose={onCartMenuClose} {...props} />
  )
}

export default AppCartDrawerContainer
