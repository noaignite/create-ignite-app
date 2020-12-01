// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import CartList from 'containers/CartList'
import RouterLink from 'containers/RouterLink'
import Button from 'components/Button'
import { useApp } from '../AppContext'
import AppDrawer from './AppDrawer'

export const useStyles = makeStyles((theme) => ({
  root: {
    '--drawer-top': 'var(--coa-header-height)',
    zIndex: `${theme.zIndex.appBar - 1} !important`,
  },
  list: {
    flexGrow: 1,
  },
  footer: {
    /**
     * ⚠️ Firefox bug: "Position: sticky doesn't work properly with flexbox"
     * https://bugzilla.mozilla.org/show_bug.cgi?id=1488080
     */
    position: 'sticky',
    bottom: 0,
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
