// @inheritedComponent Drawer

import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Drawer, IconButton, Link, Toolbar, Typography } from '@mui/material'
import {
  useCentraSelection,
  useGlobalHandlers,
  useGlobalState,
  useI18n,
  useRemoteConfig,
} from '~/context'
import { Close as CloseIcon } from '~/components/icons'
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
  const { isNavMenuOpen, ...other } = props

  const { location, selection } = useCentraSelection()
  const { menus } = useRemoteConfig()
  const { onMarketMenuToggle, onNavMenuClose } = useGlobalHandlers()
  const { t } = useI18n()

  return (
    <AppNavDrawerRoot onClose={onNavMenuClose} open={isNavMenuOpen} anchor="left" {...other}>
      <Toolbar>
        <IconButton
          onClick={onNavMenuClose}
          edge="start"
          size="small"
          aria-label={t(__translationGroup)`Close main menu`}
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
}

function AppNavDrawerContainer(props) {
  const { isNavMenuOpen } = useGlobalState()

  return <AppNavDrawer isNavMenuOpen={isNavMenuOpen} {...props} />
}

export default AppNavDrawerContainer
