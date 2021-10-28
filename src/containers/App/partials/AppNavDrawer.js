// @inheritedComponent Drawer

import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material'
import { useCheckout, useI18n, useSettings } from 'api'
import { Close as CloseIcon } from 'components/icons'
import { useApp } from '../AppContext'
import AppNavDrawerListItem from './AppNavDrawerListItem'

const AppNavDrawerRoot = styled(Drawer, {
  name: 'AppNavDrawer',
  slot: 'Root',
})({
  '& .MuiDrawer-paper': {
    maxWidth: '100%',
    width: 414, // iPhone 6/7/8 Plus
  },
})

const AppNavDrawerScrollContainer = styled('div', {
  name: 'AppNavDrawer',
  slot: 'ScrollContainer',
})(({ theme }) => ({
  ...theme.mixins.scrollable,
  ...theme.mixins.scrollbars,
  display: 'inherit',
  flexDirection: 'inherit',
  flexGrow: 1,
  padding: theme.spacing(2),
}))

const AppNavDrawerList = styled('ul', {
  name: 'AppNavDrawer',
  slot: 'List',
})(({ theme }) => ({
  margin: theme.spacing(2, 0, 4),
  '&:first-of-type': {
    marginTop: 0,
  },
}))

const AppNavDrawer = React.memo(function AppNavDrawer(props) {
  const { isNavMenuOpen, onMarketMenuToggle, onNavMenuClose, ...other } = props

  const { t } = useI18n()
  const { location, selection } = useCheckout()
  const { menus } = useSettings()

  return (
    <AppNavDrawerRoot onClose={onNavMenuClose} open={isNavMenuOpen} anchor="left" {...other}>
      <Toolbar>
        <IconButton
          onClick={onNavMenuClose}
          edge="start"
          size="small"
          aria-label={t(__translationGroup)`Close cart menu`}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <AppNavDrawerScrollContainer>
        <nav aria-label={t(__translationGroup)`Main navigation`}>
          {menus?.primary?.length > 0 && (
            <AppNavDrawerList>
              {menus.primary.map((menuLink, idx) => (
                <AppNavDrawerListItem key={idx} menuLink={menuLink} />
              ))}
            </AppNavDrawerList>
          )}

          {menus?.secondary?.length > 0 && (
            <AppNavDrawerList>
              {menus.secondary.map((menuLink, idx) => (
                <AppNavDrawerListItem key={idx} menuLink={menuLink} />
              ))}
            </AppNavDrawerList>
          )}
        </nav>

        <Typography variant="body2">
          {t(__translationGroup)`Country`}:{' '}
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
      </AppNavDrawerScrollContainer>
    </AppNavDrawerRoot>
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
