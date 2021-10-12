import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { debounce } from '@mui/material/utils'

const AppHandlersContext = React.createContext({})
const AppContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  AppHandlersContext.displayName = 'AppHandlersContext'
  AppContext.displayName = 'AppContext'
}

export function useAppHandlers() {
  return React.useContext(AppHandlersContext)
}

export function useApp() {
  return React.useContext(AppContext)
}

const CLOSE_MENUS_ON_RESIZE = true
const COOKIE_CONSENT_ID = 'cookie-consent'
const COOKIE_BAR_ENTER_DELAY = 2000

export function AppProvider(props) {
  const { children } = props

  const [isCartMenuOpen, setCartMenuOpen] = React.useState(false)
  const [isCookieBarOpen, setCookieBarOpen] = React.useState(false)
  const [isMarketMenuOpen, setMarketMenuOpen] = React.useState(false)
  const [isNavMenuOpen, setNavMenuOpen] = React.useState(false)
  const [isSearchMenuOpen, setSearchMenuOpen] = React.useState(false)

  // Helpers

  const closeAllMenus = () => {
    setCartMenuOpen(false)
    setNavMenuOpen(false)
    setSearchMenuOpen(false)
  }

  // Mount hook

  React.useEffect(() => {
    const handleResize = debounce(() => {
      if (CLOSE_MENUS_ON_RESIZE) {
        closeAllMenus()
      }
    })

    const handleRouteChangeStart = () => {
      closeAllMenus()
    }

    if (!localStorage?.getItem(COOKIE_CONSENT_ID)) {
      setTimeout(() => {
        setCookieBarOpen(true)
      }, COOKIE_BAR_ENTER_DELAY)
    }

    window.addEventListener('resize', handleResize)
    Router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
      Router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  }, [])

  // Public handlers

  const onNavMenuToggle = React.useCallback(() => {
    setNavMenuOpen((prev) => !prev)
    setCartMenuOpen(false)
    setSearchMenuOpen(false)
  }, [])

  const onNavMenuClose = React.useCallback(() => {
    setNavMenuOpen(false)
  }, [])

  const onCartMenuToggle = React.useCallback(() => {
    setCartMenuOpen((prev) => !prev)
    setNavMenuOpen(false)
    setSearchMenuOpen(false)
  }, [])

  const onCartMenuClose = React.useCallback(() => {
    setCartMenuOpen(false)
  }, [])

  const onSearchMenuToggle = React.useCallback(() => {
    setSearchMenuOpen((prev) => !prev)
    setCartMenuOpen(false)
    setNavMenuOpen(false)
  }, [])

  const onSearchMenuClose = React.useCallback(() => {
    setSearchMenuOpen(false)
  }, [])

  const onMarketMenuToggle = React.useCallback(() => {
    setMarketMenuOpen((prev) => !prev)
  }, [])

  const onMarketMenuClose = React.useCallback(() => {
    setMarketMenuOpen(false)
  }, [])

  const onCookieBarClose = React.useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_ID, 1)
    setCookieBarOpen(false)
  }, [])

  // Memoize handlers context separately so that one can subscribe
  // to them without re-rendering on state updates.
  const handlersContextValue = React.useMemo(
    () => ({
      onCartMenuClose,
      onCartMenuToggle,
      onCookieBarClose,
      onMarketMenuClose,
      onMarketMenuToggle,
      onNavMenuClose,
      onNavMenuToggle,
      onSearchMenuClose,
      onSearchMenuToggle,
    }),
    [
      onCartMenuClose,
      onCartMenuToggle,
      onCookieBarClose,
      onMarketMenuClose,
      onMarketMenuToggle,
      onNavMenuClose,
      onNavMenuToggle,
      onSearchMenuClose,
      onSearchMenuToggle,
    ],
  )

  const contextValue = {
    isCartMenuOpen,
    isCookieBarOpen,
    isMarketMenuOpen,
    isNavMenuOpen,
    isSearchMenuOpen,
    // Computed props
    isSomeMenuOpen: isCartMenuOpen || isNavMenuOpen || isSearchMenuOpen,
    // Merge in handlers for easy access
    ...handlersContextValue,
  }

  return (
    <AppHandlersContext.Provider value={handlersContextValue}>
      <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
    </AppHandlersContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContext
