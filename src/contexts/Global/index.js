import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

export const GlobalStateContext = React.createContext({})
export const GlobalHandlersContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  GlobalStateContext.displayName = 'GlobalStateContext'
  GlobalHandlersContext.displayName = 'GlobalHandlersContext'
}

export function useGlobalState() {
  return React.useContext(GlobalStateContext)
}

export function useGlobalHandlers() {
  return React.useContext(GlobalHandlersContext)
}

const COOKIE_CONSENT_ID = 'cookie-consent'
const COOKIE_BAR_ENTER_DELAY = 2000

function GlobalProvider(props) {
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
    const handleRouteChangeStart = () => {
      closeAllMenus()
    }

    if (!localStorage?.getItem(COOKIE_CONSENT_ID)) {
      setTimeout(() => {
        setCookieBarOpen(true)
      }, COOKIE_BAR_ENTER_DELAY)
    }

    Router.events.on('routeChangeStart', handleRouteChangeStart)
    return () => {
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

  const stateContextValue = React.useMemo(
    () => ({
      isCartMenuOpen,
      isCookieBarOpen,
      isMarketMenuOpen,
      isNavMenuOpen,
      isSearchMenuOpen,
      // Computed props
      isSomeMenuOpen: isCartMenuOpen || isNavMenuOpen || isSearchMenuOpen,
    }),
    [isCartMenuOpen, isCookieBarOpen, isMarketMenuOpen, isNavMenuOpen, isSearchMenuOpen],
  )

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

  return (
    <GlobalStateContext.Provider value={stateContextValue}>
      <GlobalHandlersContext.Provider value={handlersContextValue}>
        {children}
      </GlobalHandlersContext.Provider>
    </GlobalStateContext.Provider>
  )
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GlobalProvider
