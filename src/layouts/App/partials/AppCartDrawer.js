import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { Button, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { useCentraSelection, useGlobalHandlers, useGlobalState, useI18n } from '~/contexts'
import { CartItem, RouterLink } from '~/containers'
import { CartIcon, CloseIcon } from '~/components'

const AppCartDrawerRoot = styled(Drawer)({
  '& .MuiDrawer-paper': {
    maxWidth: '100%',
    width: 414, // iPhone 6/7/8 Plus
  },
})

const AppCartDrawerScrollContainer = styled('div')(({ theme }) => ({
  ...theme.mixins.scrollable,
  ...theme.mixins.scrollbars,
  display: 'flex',
  flexDirection: 'column',
  flexGrow: 1,
  padding: theme.spacing(2),
  paddingTop: 0,
}))

const AppCartDrawerItems = styled('div')(({ theme }) => ({
  display: 'grid',
  gridGap: theme.spacing(1),
}))

const AppCartDrawer = React.memo(function AppCartDrawer(props) {
  const { isCartMenuOpen, ...other } = props

  const { selection } = useCentraSelection()
  const { onCartMenuClose } = useGlobalHandlers()
  const { t } = useI18n()

  return (
    <AppCartDrawerRoot onClose={onCartMenuClose} open={isCartMenuOpen} anchor="right" {...other}>
      <Toolbar>
        <CartIcon sx={{ mr: 1, transform: 'translateY(-2px)' }} />
        <Typography variant="body1">{t(__translationGroup)`Bag`}</Typography>

        <IconButton
          sx={{ ml: 'auto' }}
          onClick={onCartMenuClose}
          edge="end"
          size="small"
          aria-label={t(__translationGroup)`Close cart menu`}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <AppCartDrawerScrollContainer>
        <AppCartDrawerItems>
          {selection?.items.map((cartItem, idx) => (
            <CartItem key={idx} cartItem={cartItem} />
          ))}
        </AppCartDrawerItems>
      </AppCartDrawerScrollContainer>

      <div>
        <Button component={RouterLink} href="/checkout" variant="contained" fullWidth>
          {t(__translationGroup)`To checkout`}
        </Button>
      </div>
    </AppCartDrawerRoot>
  )
})

AppCartDrawer.propTypes = {
  isCartMenuOpen: PropTypes.bool,
}

function AppCartDrawerContainer(props) {
  const { isCartMenuOpen } = useGlobalState()

  return <AppCartDrawer isCartMenuOpen={isCartMenuOpen} {...props} />
}

export default AppCartDrawerContainer
