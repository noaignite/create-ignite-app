// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import { useGlobal } from 'containers/Global/GlobalContext'
import List from 'components/List'
import { useAppHandlers } from '../AppContext'
import AppDrawer from './AppDrawer'
import AppNavDrawerListItem from './AppNavDrawerListItem'

export const styles = {}

const AppNavDrawer = React.forwardRef(function AppNavDrawer(props, ref) {
  const { classes, open, ...other } = props

  const { menus } = useGlobal()
  const { onNavMenuClose } = useAppHandlers()

  return (
    <AppDrawer onClose={onNavMenuClose} open={open} anchor="left" ref={ref} {...other}>
      <List component="nav" disablePadding aria-label="Main navigation">
        {menus?.menuPrimary?.map((menuLink, idx) => (
          <AppNavDrawerListItem key={idx} menuLink={menuLink} />
        ))}
      </List>
    </AppDrawer>
  )
})

AppNavDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  open: PropTypes.bool,
}

export default withStyles(styles)(React.memo(AppNavDrawer))
