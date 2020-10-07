import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { debounce } from '@material-ui/core/utils'
import { CLOSE_MENUS_ON_RESIZE } from 'src/site.config'

export const AppHandlersContext = React.createContext({})
export const AppContext = React.createContext({})

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

export function AppProvider(props) {
  const [appBarColor, setAppBarColor] = React.useState('default')
  const [hideFooter, setHideFooter] = React.useState(false)
  const [hideHeader, setHideHeader] = React.useState(false)
  const [isCartMenuOpen, setIsCartMenuOpen] = React.useState(false)
  const [isCookieBarOpen, setIsCookieBarOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false)
  const [isSearchMenuOpen, setIsSearchMenuOpen] = React.useState(false)

  // Helpers

  const closeAllMenus = () => {
    setIsCartMenuOpen(false)
    setIsNavMenuOpen(false)
    setIsSearchMenuOpen(false)
  }

  // Private handlers

  const handleRouteChangeStart = React.useCallback(() => {
    setIsLoading(true)
    closeAllMenus()
  }, [])

  const handleRouteChangeComplete = React.useCallback(() => {
    setIsLoading(false)
  }, [])

  // Mount hook

  React.useEffect(() => {
    const handleResize = debounce(() => {
      if (CLOSE_MENUS_ON_RESIZE) {
        closeAllMenus()
      }
    })

    if (!localStorage.getItem('cookie-consent')) {
      setTimeout(() => {
        setIsCookieBarOpen(true)
      }, 2000)
    }

    window.addEventListener('resize', handleResize)
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleRouteChangeStart, handleRouteChangeComplete])

  // Public handlers

  const onAppBarMenuClick = React.useCallback(() => {
    setIsNavMenuOpen((prev) => !prev)
    setIsCartMenuOpen(false)
    setIsSearchMenuOpen(false)
  }, [])

  const onAppBarCartClick = React.useCallback(() => {
    setIsCartMenuOpen((prev) => !prev)
    setIsNavMenuOpen(false)
    setIsSearchMenuOpen(false)
  }, [])

  const onAppBarSearchClick = React.useCallback(() => {
    setIsSearchMenuOpen((prev) => !prev)
    setIsCartMenuOpen(false)
    setIsNavMenuOpen(false)
  }, [])

  const onCartMenuClose = React.useCallback(() => {
    setIsCartMenuOpen(false)
  }, [])

  const onNavMenuClose = React.useCallback(() => {
    setIsNavMenuOpen(false)
  }, [])

  const onSearchMenuClose = React.useCallback(() => {
    setIsSearchMenuOpen(false)
  }, [])

  const onCookieBarClose = React.useCallback(() => {
    localStorage.setItem('cookie-consent', 1)
    setIsCookieBarOpen(false)
  }, [])

  // Memoize handlers context separately so that one can subscribe
  // to them without re-rendering on state updates.
  const appHandlersContext = React.useMemo(
    () => ({
      onAppBarCartClick,
      onAppBarMenuClick,
      onAppBarSearchClick,
      onCartMenuClose,
      onCookieBarClose,
      onNavMenuClose,
      onSearchMenuClose,
      // Expose setters for custom hooks
      setAppBarColor,
      setHideFooter,
      setHideHeader,
    }),
    [
      onAppBarCartClick,
      onAppBarMenuClick,
      onAppBarSearchClick,
      onCartMenuClose,
      onCookieBarClose,
      onNavMenuClose,
      onSearchMenuClose,
    ],
  )

  const appContext = {
    appBarColor,
    hideFooter,
    hideHeader,
    isCartMenuOpen,
    isCookieBarOpen,
    isLoading,
    isNavMenuOpen,
    isSearchMenuOpen,
    // Computed props
    isBackdropOpen: isLoading,
    isSomeMenuOpen: isCartMenuOpen || isNavMenuOpen || isSearchMenuOpen,
    // Merge in handlers for easy access
    ...appHandlersContext,
  }

  return (
    <AppHandlersContext.Provider value={appHandlersContext}>
      <AppContext.Provider value={appContext}>{props.children}</AppContext.Provider>
    </AppHandlersContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppContext
