import * as React from 'react'
import PropTypes from 'prop-types'
import { nest } from 'recompose'
import Router from 'next/router'
import mediaLoaded from '@maeertin/medialoaded'
import { debounce } from '@oakwood/oui-utils'
import { CLOSE_MENUS_ON_RESIZE } from 'src/site.config'

const AppHandlersContext = React.createContext()
const AppContext = React.createContext()

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

export function AppContextProvider(props) {
  const [appBarColor, setAppBarColor] = React.useState('default')
  const [isCartMenuOpen, setIsCartMenuOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [isMediaReady, setIsMediaReady] = React.useState(false)
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(false)

  // Helpers

  const closeAllMenus = () => {
    setIsCartMenuOpen(false)
    setIsNavMenuOpen(false)
  }

  // Private handlers

  const handleMediaReady = React.useCallback(() => {
    setIsMediaReady(true)
  }, [])

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

    mediaLoaded('.coa-preload', handleMediaReady)
    window.addEventListener('resize', handleResize)
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleMediaReady, handleRouteChangeStart, handleRouteChangeComplete])

  // Public handlers

  const onAppBarBurgerClick = React.useCallback(() => {
    setIsNavMenuOpen(prev => !prev)
    setIsCartMenuOpen(false)
  }, [])

  const onAppBarCartClick = React.useCallback(() => {
    setIsCartMenuOpen(prev => !prev)
    setIsNavMenuOpen(false)
  }, [])

  const onCartMenuClose = React.useCallback(() => {
    setIsCartMenuOpen(false)
  }, [])

  const onCartMenuExited = React.useCallback(() => {
    // This callback is run only once the menu has unmounted.
    // A good place to reset desired state.
  }, [])

  const onNavMenuClose = React.useCallback(() => {
    setIsNavMenuOpen(false)
  }, [])

  const onNavMenuExited = React.useCallback(() => {
    // This callback is run only once the menu has unmounted.
    // A good place to reset desired state.
  }, [])

  // Memoize handlers context separately so that one can subscribe
  // to them without re-rendering on state updates.
  const appHandlersContext = React.useMemo(
    () => ({
      onAppBarBurgerClick,
      onAppBarCartClick,
      onCartMenuClose,
      onCartMenuExited,
      onNavMenuClose,
      onNavMenuExited,
      // Expose setters for custom hooks
      setAppBarColor,
    }),
    [
      onAppBarBurgerClick,
      onAppBarCartClick,
      onCartMenuClose,
      onCartMenuExited,
      onNavMenuClose,
      onNavMenuExited,
      setAppBarColor,
    ],
  )

  // Memoize context so that no re-renders occur despite props changing
  // higher up the tree.
  const appContext = React.useMemo(
    () => ({
      appBarColor,
      isCartMenuOpen,
      isLoading,
      isMediaReady,
      isNavMenuOpen,
      // Computed props
      isBackdropOpen: isLoading,
      isSomeMenuOpen: isCartMenuOpen || isNavMenuOpen,
      // Merge in handlers for easy access
      ...appHandlersContext,
    }),
    [appBarColor, appHandlersContext, isCartMenuOpen, isLoading, isMediaReady, isNavMenuOpen],
  )

  return (
    <AppHandlersContext.Provider value={appHandlersContext}>
      <AppContext.Provider value={appContext}>{props.children}</AppContext.Provider>
    </AppHandlersContext.Provider>
  )
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function withAppContextProvider(Component) {
  return nest(AppContextProvider, Component)
}

export default AppContext
