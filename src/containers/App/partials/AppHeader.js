// @inheritedComponent AppBar

import * as React from 'react'
import PropTypes from 'prop-types'
import useSize from '@react-hook/size'
import { generateUtilityClasses } from '@mui/base'
import { styled } from '@mui/system'
import { AppBar, Badge, IconButton, Toolbar } from '@mui/material'
import { useCentraSelection, useGlobalHandlers, useGlobalState, useI18n } from '~/context'
import {
  Brand as BrandIcon,
  Cart as CartIcon,
  Search as SearchIcon,
  Close as CloseIcon,
  Menu as MenuIcon,
} from '~/components/icons'
import RouterLink from '../../RouterLink'

const BREAKPOINT_KEY = 'md'

export const classes = generateUtilityClasses('CiaAppHeader', [
  'toolbarPushMobile',
  'toolbarPushDesktop',
  'hiddenOnMobile',
  'hiddenOnDesktop',
])

const AppHeaderRoot = styled(AppBar, {
  name: 'AppHeader',
  slot: 'Root',
})(({ theme, ownerState }) => ({
  ...(ownerState.headerModeState === 'transparent' && {
    '&:not(:hover):not(:focus-within)': {
      backgroundColor: 'transparent',
      color: ownerState.headerColor,
    },
  }),
  ...(ownerState.disableTransparency !== undefined && {
    transition: theme.transitions.create(['background-color'], {
      duration: theme.transitions.duration.shortest, // Match value of `IconButton`
    }),
  }),
  // Util classes
  [`& .${classes.toolbarPushMobile}`]: {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: { marginLeft: 'auto' },
  },
  [`& .${classes.toolbarPushDesktop}`]: {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: { marginLeft: 'auto' },
  },
  [`& .${classes.hiddenOnMobile}`]: {
    [theme.breakpoints.down(BREAKPOINT_KEY)]: { display: 'none' },
  },
  [`& .${classes.hiddenOnDesktop}`]: {
    [theme.breakpoints.up(BREAKPOINT_KEY)]: { display: 'none' },
  },
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
    display: 'block',
    width: 'auto',
  },
})

const AppHeader = React.memo(function AppHeader(props) {
  const {
    headerColor = 'inherit',
    headerMode = 'opaque',
    isCartMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    isSomeMenuOpen,
    productsCount,
    ...other
  } = props

  const { onCartMenuToggle, onNavMenuToggle, onSearchMenuToggle } = useGlobalHandlers()
  const { t } = useI18n()

  const rootRef = React.useRef(null)
  const [, rootHeight] = useSize(rootRef)

  const [disableTransparency, setDisableTransparency] = React.useState(undefined)
  const syncDisableTransparency = React.useCallback(() => {
    setDisableTransparency(window.pageYOffset > 100)
  }, [])

  React.useEffect(() => {
    const handleScroll = () => {
      syncDisableTransparency()
    }

    if (headerMode === 'auto') {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    // Define `disableTransparency` value on `headerMode` prop change, thereby
    // enabling transitions. Doing so negates flashing of header on page load
    // for pages that don't use `headerMode="opaque"`.
    return syncDisableTransparency
  }, [headerMode, syncDisableTransparency])

  let headerModeState = 'opaque'
  if (
    (headerMode === 'transparent' || (headerMode === 'auto' && !disableTransparency)) &&
    !isSomeMenuOpen
  ) {
    headerModeState = 'transparent'
  }

  const ownerState = {
    disableTransparency,
    headerColor,
    headerModeState,
  }

  return (
    <AppHeaderRoot
      ownerState={ownerState}
      position={headerMode === 'opaque' ? 'sticky' : 'fixed'}
      ref={rootRef}
      {...other}
    >
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          :root {
            --cia-header-height: ${rootHeight}px;
            --cia-initial-sticky-top: ${headerMode === 'opaque' ? rootHeight : 0}px;
            --cia-sticky-top: ${headerMode !== 'transparent' ? rootHeight : 0}px;
          }
        `,
        }}
      />

      <Toolbar>
        <IconButton
          onClick={onNavMenuToggle}
          color="inherit" // Inherit color from `headerColor`.
          edge="start"
          size="small"
          aria-haspopup="true"
          aria-expanded={isNavMenuOpen}
          aria-label={t(__translationGroup)`Toggle main menu`}
        >
          {isNavMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <div className={classes.toolbarPushMobile} />
        <div className={classes.toolbarPushDesktop} />

        <AppHeaderBrandLink href="/" aria-label={t(__translationGroup)`Go to the homepage`}>
          <BrandIcon />
        </AppHeaderBrandLink>

        <IconButton
          onClick={onSearchMenuToggle}
          color="inherit" // Inherit color from `headerColor`.
          size="small"
          aria-haspopup="true"
          aria-expanded={isSearchMenuOpen}
          aria-label={t(__translationGroup)`Toggle search`}
        >
          {isSearchMenuOpen ? <CloseIcon /> : <SearchIcon />}
        </IconButton>

        <IconButton
          onClick={onCartMenuToggle}
          color="inherit" // Inherit color from `headerColor`.
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
  headerColor: PropTypes.string,
  headerMode: PropTypes.oneOf(['opaque', 'transparent', 'auto']),
  isCartMenuOpen: PropTypes.bool,
  isNavMenuOpen: PropTypes.bool,
  isSearchMenuOpen: PropTypes.bool,
  isSomeMenuOpen: PropTypes.bool,
  productsCount: PropTypes.number,
}

function AppHeaderContainer(props) {
  const { isCartMenuOpen, isNavMenuOpen, isSearchMenuOpen, isSomeMenuOpen } = useGlobalState()
  const {
    selection: { items },
  } = useCentraSelection()

  return (
    <AppHeader
      isCartMenuOpen={isCartMenuOpen}
      isNavMenuOpen={isNavMenuOpen}
      isSearchMenuOpen={isSearchMenuOpen}
      isSomeMenuOpen={isSomeMenuOpen}
      productsCount={items.length}
      {...props}
    />
  )
}

export default AppHeaderContainer
