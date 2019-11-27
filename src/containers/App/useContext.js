import React from 'react'
import Router from 'next/router'
import { CLOSE_MENUS_ON_RESIZE } from 'src/site.config'

export const defaultState = {
  isCartMenuOpen: false,
  isLoading: false,
  isMounted: false,
  isNavMenuOpen: false,
}

export default (initialState = defaultState) => {
  const [isCartMenuOpen, setIsCartMenuOpen] = React.useState(initialState.isCartMenuOpen)
  const [isLoading, setIsLoading] = React.useState(initialState.isLoading)
  const [isMounted, setIsMounted] = React.useState(initialState.isMounted)
  const [isNavMenuOpen, setIsNavMenuOpen] = React.useState(initialState.isNavMenuOpen)

  // Helpers

  const closeAllMenus = () => {
    setIsCartMenuOpen(false)
    setIsNavMenuOpen(false)
  }

  // Private handlers

  const handleMount = React.useCallback(() => {
    setIsMounted(true)
  }, [])

  const handleResize = React.useCallback(() => {
    if (CLOSE_MENUS_ON_RESIZE) {
      closeAllMenus()
    }
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
    handleMount()

    window.addEventListener('resize', handleResize)
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      window.removeEventListener('resize', handleResize)
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleMount, handleResize, handleRouteChangeStart, handleRouteChangeComplete])

  // Public handlers

  const onAppBarBurgerClick = () => {
    setIsCartMenuOpen(false)
    setIsNavMenuOpen(prev => !prev)
  }

  const onAppBarCartClick = () => {
    setIsCartMenuOpen(prev => !prev)
    setIsNavMenuOpen(false)
  }

  const onCartMenuClose = () => {
    setIsCartMenuOpen(false)
  }

  const onCartMenuExited = () => {
    // This callback is run only once the component has unmounted.
    // A good place to reset it's component state.
  }

  const onNavMenuClose = () => {
    setIsNavMenuOpen(false)
  }

  const onNavMenuExited = () => {
    // This callback is run only once the component has unmounted.
    // A good place to reset it's component state.
  }

  return {
    // Computed properties
    isBackdropOpen: isLoading,
    isMenusOpen: isCartMenuOpen || isNavMenuOpen,
    // Normal properties
    isCartMenuOpen,
    isLoading,
    isMounted,
    isNavMenuOpen,
    onAppBarBurgerClick,
    onAppBarCartClick,
    onCartMenuClose,
    onCartMenuExited,
    onNavMenuClose,
    onNavMenuExited,
  }
}
