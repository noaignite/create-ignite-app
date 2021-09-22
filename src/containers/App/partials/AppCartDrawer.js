// @inheritedComponent Drawer

import * as React from 'react'
import PropTypes from 'prop-types'
import dynamic from 'next/dynamic'
import { styled } from '@mui/system'
import { Button, CircularProgress, Drawer, IconButton, Toolbar, Typography } from '@mui/material'
import { useI18n } from 'api'
import { Cart as CartIcon, Close as CloseIcon } from 'components/icons'
import RouterLink from '../../RouterLink'
import { useApp } from '../AppContext'

const Cart = dynamic(() => import(/* webpackChunkName: "containers/Cart" */ 'containers/Cart'), {
  loading: () => <CircularProgress size={24} style={{ margin: '100px auto' }} />,
  ssr: false,
})

const AppCartDrawerRoot = styled(Drawer, {
  name: 'AppCartDrawer',
  slot: 'Root',
})({
  '& .MuiDrawer-paper': {
    maxWidth: '100%',
    width: 414, // iPhone 6/7/8 Plus
  },
})

const AppCartDrawerScrollContainer = styled('div', {
  name: 'AppCartDrawer',
  slot: 'ScrollContainer',
})(({ theme }) => ({
  ...theme.mixins.scrollable,
  ...theme.mixins.scrollbars,
  display: 'inherit',
  flexDirection: 'inherit',
  flexGrow: 1,
  padding: theme.spacing(2),
  paddingTop: 0,
}))

const AppCartDrawer = React.memo(function AppCartDrawer(props) {
  const { isCartMenuOpen, onCartMenuClose, ...other } = props

  const { t } = useI18n()

  const [isVisible, setIsVisible] = React.useState(isCartMenuOpen) // Used to dynamically load the Cart.

  const handleExited = React.useCallback(() => {
    setIsVisible(false)
  }, [])

  React.useEffect(() => {
    if (isCartMenuOpen) {
      setIsVisible(true)
    }
  }, [isCartMenuOpen])

  return (
    <AppCartDrawerRoot
      SlideProps={{ onExited: handleExited }}
      onClose={onCartMenuClose}
      open={isCartMenuOpen}
      anchor="right"
      {...other}
    >
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

      <AppCartDrawerScrollContainer>{isVisible && <Cart />}</AppCartDrawerScrollContainer>

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
  onCartMenuClose: PropTypes.func,
}

function AppCartDrawerContainer(props) {
  const { isCartMenuOpen, onCartMenuClose } = useApp()

  return (
    <AppCartDrawer isCartMenuOpen={isCartMenuOpen} onCartMenuClose={onCartMenuClose} {...props} />
  )
}

export default AppCartDrawerContainer
