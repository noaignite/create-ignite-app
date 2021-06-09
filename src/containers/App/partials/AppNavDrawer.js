// @inheritedComponent AppDrawer

import * as React from 'react'
import PropTypes from 'prop-types'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { useCheckout, useGlobal, useI18n } from 'api'
import Link from 'components/Link'
import Typography from 'components/Typography'
import { useApp } from '../AppContext'
import AppDrawer from './AppDrawer'
import AppNavDrawerListItem from './AppNavDrawerListItem'

export const useStyles = makeStyles((theme) => ({
  root: {
    '--drawer-top': 'var(--coa-header-height)',
    '--inset-width': '32px', // Medium icon size + theme.spacing(1)
    zIndex: `${theme.zIndex.appBar - 1} !important`,
  },
  paper: {
    padding: theme.spacing(5, 2),
  },
  list: {
    margin: theme.spacing(2, 0, 4),
    '&:first-of-type': {
      marginTop: 0,
    },
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1, 0),
    paddingLeft: 'calc(var(--inset-width) * var(--level))',
  },
  listItemLink: {
    display: 'inherit',
    alignItems: 'inherit',
    '$list &': theme.typography.h4,
    '$list $list &': theme.typography.body2,
  },
  listItemIcon: {
    marginRight: theme.spacing(1),
  },
}))

const AppNavDrawer = React.memo(function AppNavDrawer(props) {
  const { isNavMenuOpen, onMarketMenuToggle, onNavMenuClose, ...other } = props
  const classes = useStyles(props)

  const { t } = useI18n()
  const { location, selection } = useCheckout()
  const { menus } = useGlobal()

  const AppNavDrawerListItemClasses = {
    list: classes.list,
    listItem: classes.listItem,
    listItemLink: classes.listItemLink,
    listItemIcon: classes.listItemIcon,
  }

  return (
    <AppDrawer
      classes={{
        root: classes.root,
        paper: classes.paper,
      }}
      onClose={onNavMenuClose}
      open={isNavMenuOpen}
      anchor="left"
      {...other}
    >
      <nav
        aria-label={t(
          'containers/App/partials/AppNavDrawer/aria-mainNavigation',
          'Main navigation',
        )}
      >
        {menus.menuPrimary && (
          <ul className={classes.list}>
            {menus.menuPrimary.map((menuLink, idx) => (
              <AppNavDrawerListItem
                key={idx}
                classes={AppNavDrawerListItemClasses}
                menuLink={menuLink}
              />
            ))}
          </ul>
        )}

        {menus.menuSecondary && (
          <ul className={classes.list}>
            {menus.menuSecondary.map((menuLink, idx) => (
              <AppNavDrawerListItem
                key={idx}
                classes={AppNavDrawerListItemClasses}
                menuLink={menuLink}
              />
            ))}
          </ul>
        )}
      </nav>

      <Typography variant="body2">
        {t('containers/App/partials/AppNavDrawer/marketMenuButton', 'Country')}:{' '}
        <Link // eslint-disable-line jsx-a11y/anchor-is-valid
          onClick={onMarketMenuToggle}
          component="button"
          type="button"
          underline="always"
          variant="body2"
        >
          {location.country} / {selection.currency}
        </Link>
      </Typography>
    </AppDrawer>
  )
})

AppNavDrawer.propTypes = {
  isNavMenuOpen: PropTypes.bool,
  onMarketMenuToggle: PropTypes.func,
  onNavMenuClose: PropTypes.func,
}

function AppNavDrawerContainer(props) {
  const { isNavMenuOpen, onMarketMenuToggle, onNavMenuClose } = useApp()

  return (
    <AppNavDrawer
      isNavMenuOpen={isNavMenuOpen}
      onMarketMenuToggle={onMarketMenuToggle}
      onNavMenuClose={onNavMenuClose}
      {...props}
    />
  )
}

export default AppNavDrawerContainer
