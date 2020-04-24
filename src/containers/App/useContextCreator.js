import * as React from 'react'
import Router from 'next/router'
import mediaLoaded from '@maeertin/medialoaded'
import { debounce } from '@oakwood/oui-utils'
import { CLOSE_MENUS_ON_RESIZE } from 'src/site.config'

export const defaultState = {
  isAppBarFixed: false,
  isCartMenuOpen: false,
  isLoading: false,
  isMediaReady: false,
  isNavMenuOpen: false,
  isReady: false,
}

export default props => {
  const { initialState = defaultState } = props

  const [isAppBarFixed, setIsAppBarFixed] = React.useState(initialState.isAppBarFixed)
  const [isCartMenuOpen, setIsCartMenuOpen] = React.useState(initialState.isCartMenuOpen)
  const [isLoading, setIsLoading] = React.useState(initialState.isLoading)
  const [isMediaReady, setIsMediaReady] = React.useState(initialState.isMediaReady)
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(initialState.isNavMenuOpen)
  const [isReady, setIsReady] = React.useState(initialState.isReady)

  // Helpers

  const closeAllMenus = () => {
    setIsCartMenuOpen(false)
    setIsNavMenuOpen(false)
  }

  // Private handlers

  const handleMediaReady = React.useCallback(() => {
    setIsMediaReady(true)

    // The `setIsReady` setter can be moved elsewhere. For example, if a website intro
    // sequence is implemented, this would be called when that animation finishes.
    setIsReady(true)
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

  return {
    // Expose setters for custom hooks
    setIsAppBarFixed,
    // Computed properties
    isBackdropOpen: isLoading,
    isSomeMenusOpen: isCartMenuOpen || isNavMenuOpen,
    // Normal properties
    isAppBarFixed,
    isCartMenuOpen,
    isLoading,
    isMediaReady,
    isNavMenuOpen,
    isReady,
    onAppBarBurgerClick,
    onAppBarCartClick,
    onCartMenuClose,
    onCartMenuExited,
    onNavMenuClose,
    onNavMenuExited,
  }
}
