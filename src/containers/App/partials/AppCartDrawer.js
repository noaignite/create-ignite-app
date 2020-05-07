// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import CartList from 'containers/CartList'
import RouterLink from 'containers/RouterLink'
import Button from 'components/Button'
import { useAppHandlers } from '../AppContext'
import AppDrawer from './AppDrawer'

export const styles = (theme) => ({
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
})

const AppCartDrawer = React.forwardRef(function AppCartDrawer(props, ref) {
  const { classes, open, ...other } = props

  const { onCartMenuClose } = useAppHandlers()

  return (
    <AppDrawer open={open} onClose={onCartMenuClose} anchor="right" ref={ref} {...other}>
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
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
}

AppCartDrawer.uiName = 'AppCartDrawer'

export default withStyles(styles)(React.memo(AppCartDrawer))
