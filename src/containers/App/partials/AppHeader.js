// @inheritedComponent AppBar

import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@material-ui/system'
import { Badge } from '@material-ui/core'
import { useCheckoutSelection, useI18n } from 'api'
import { useDimensions } from 'utils'
import {
  Brand as BrandIcon,
  Cart as CartIcon,
  Search as SearchIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
} from 'components/icons'
import { AppBar, IconButton, Toolbar } from 'components'
import RouterLink from '../../RouterLink'
import { useApp } from '../AppContext'

const BREAKPOINT_KEY = 'md'

const AppHeaderRoot = styled(AppBar, {
  name: 'AppHeader',
  slot: 'Root',
})(({ theme, ownerState }) => ({
  ...(ownerState.color === 'transparent' && {
    '&:not(:hover):not(:focus)': {
      backgroundColor: 'transparent',
      color: 'inherit',
    },
  }),
  ...(ownerState.disableTransparency !== undefined && {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.shortest, // Match value of `IconButton`
    }),
  }),
}))

const AppHeaderToolbarPush = styled('div', {
  name: 'AppHeader',
  slot: 'ToolbarPush',
})(({ theme, ownerState }) => ({
  ...(ownerState.variant === 'mobile' && {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: {
      marginLeft: 'auto',
    },
  }),
  ...(ownerState.variant === 'desktop' && {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: {
      marginLeft: 'auto',
    },
  }),
}))

const AppHeaderBrandLink = styled(RouterLink, {
  name: 'AppHeader',
  slot: 'BrandLink',
})({
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
  color: 'inherit',
  '& > svg': {
    width: 'auto',
  },
})

const AppHeader = React.memo(function AppHeader(props) {
  const {
    appBarColor,
    className,
    isCartMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    onCartMenuToggle,
    onNavMenuToggle,
    onSearchMenuToggle,
    productsCount,
    ...other
  } = props
  // const classes = useStyles(props)

  const { t } = useI18n()
  const [rootRef, dimensions] = useDimensions()

  const [disableTransparency, setDisableTransparency] = React.useState(undefined)
  const syncDisableTransparency = React.useCallback(() => {
    setDisableTransparency(window.pageYOffset > 100)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      syncDisableTransparency()
    }

    if (appBarColor === 'auto') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Define `disableTransparency` value on `color` prop change, thereby
    // enabling transitions. Doing so negates flashing of header on page load
    // for pages that don't use `color="default"`.
    return syncDisableTransparency
  }, [appBarColor, syncDisableTransparency])

  let color = isSomeMenuOpen ? 'default' : appBarColor
  if (color === 'auto') {
    color = disableTransparency ? 'default' : 'transparent'
  }

  return (
    <AppHeaderRoot
      ownerState={{ color, disableTransparency }}
      position={appBarColor === 'default' ? 'sticky' : 'fixed'}
      ref={rootRef}
      {...other}
    >
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --coa-header-height: ${dimensions.height}px;
            --coa-initial-sticky-top: ${appBarColor === 'default' ? dimensions.height : 0}px;
            --coa-sticky-top: ${appBarColor !== 'transparent' ? dimensions.height : 0}px;
          }
        `,
        }}
      />

      <Toolbar>
        <IconButton
          onClick={onNavMenuToggle}
          edge="start"
          size="small"
          aria-haspopup="true"
          aria-expanded={isNavMenuOpen}
          aria-label={t(__translationGroup)`Toggle main menu`}
        >
          {isNavMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <AppHeaderToolbarPush ownerState={{ variant: 'mobile' }} />
        <AppHeaderToolbarPush ownerState={{ variant: 'desktop' }} />

        <AppHeaderBrandLink href="/" aria-label={t(__translationGroup)`Go to the homepage`}>
          <BrandIcon />
        </AppHeaderBrandLink>

        <IconButton
          onClick={onSearchMenuToggle}
          size="small"
          aria-haspopup="true"
          aria-expanded={isSearchMenuOpen}
          aria-label={t(__translationGroup)`Toggle search`}
        >
          {isSearchMenuOpen ? <CloseIcon /> : <SearchIcon />}
        </IconButton>

        <IconButton
          onClick={onCartMenuToggle}
          edge="end"
          size="small"
          aria-haspopup="true"
          aria-expanded={isCartMenuOpen}
          aria-label={t(__translationGroup)`Toggle cart menu`}
        >
          {isCartMenuOpen ? (
            <CloseIcon />
          ) : (
            <Badge badgeContent={productsCount} color="primary" overlap="circular">
              <CartIcon />
            </Badge>
          )}
        </IconButton>
      </Toolbar>
    </AppHeaderRoot>
  )
})

AppHeader.propTypes = {
  appBarColor: PropTypes.oneOf(['default', 'transparent', 'auto']),
  className: PropTypes.string,
  isCartMenuOpen: PropTypes.bool,
  isNavMenuOpen: PropTypes.bool,
  isSearchMenuOpen: PropTypes.bool,
  isSomeMenuOpen: PropTypes.bool,
  onCartMenuToggle: PropTypes.func,
  onNavMenuToggle: PropTypes.func,
  onSearchMenuToggle: PropTypes.func,
  productsCount: PropTypes.number,
}

function AppHeaderContainer(props) {
  const {
    appBarColor,
    hideHeader,
    isCartMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    onCartMenuToggle,
    onNavMenuToggle,
    onSearchMenuToggle,
  } = useApp()
  const { items } = useCheckoutSelection()

  if (hideHeader) {
    return null
  }

  return (
    <AppHeader
      appBarColor={appBarColor}
      isCartMenuOpen={isCartMenuOpen}
      isNavMenuOpen={isNavMenuOpen}
      isSearchMenuOpen={isSearchMenuOpen}
      isSomeMenuOpen={isSomeMenuOpen}
      onCartMenuToggle={onCartMenuToggle}
      onNavMenuToggle={onNavMenuToggle}
      onSearchMenuToggle={onSearchMenuToggle}
      productsCount={items.length}
      {...props}
    />
  )
}

export default AppHeaderContainer
