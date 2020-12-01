// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useGlobal } from 'containers/Global/GlobalContext'
import List from 'components/List'
import { useApp } from '../AppContext'
import AppDrawer from './AppDrawer'
import AppNavDrawerListItem from './AppNavDrawerListItem'

export const useStyles = makeStyles((theme) => ({
  root: {
    '--drawer-top': 'var(--coa-header-height)',
    zIndex: `${theme.zIndex.appBar - 1} !important`,
  },
}))

const AppNavDrawer = React.memo(function AppNavDrawer(props) {
  const { isNavMenuOpen, onNavMenuClose, ...other } = props
  const classes = useStyles(props)

  const { menus } = useGlobal()

  return (
    <AppDrawer
      classes={{ root: classes.root }}
      onClose={onNavMenuClose}
      open={isNavMenuOpen}
      anchor="left"
      {...other}
    >
      <List component="nav" disablePadding aria-label="Main navigation">
        {menus?.menuPrimary?.map((menuLink, idx) => (
          <AppNavDrawerListItem key={idx} menuLink={menuLink} />
        ))}
      </List>
    </AppDrawer>
  )
})

AppNavDrawer.propTypes = {
  isNavMenuOpen: PropTypes.bool,
  onNavMenuClose: PropTypes.func,
}

function AppNavDrawerContainer(props) {
  const { isNavMenuOpen, onNavMenuClose } = useApp()

  return <AppNavDrawer isNavMenuOpen={isNavMenuOpen} onNavMenuClose={onNavMenuClose} {...props} />
}

export default AppNavDrawerContainer
