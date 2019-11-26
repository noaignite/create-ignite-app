import React from 'react'
import Router from 'next/router'
import { CLOSE_MENUS_ON_RESIZE } from 'src/site.config'

export const defaultState = {
  isLoading: false,
  isMenuOpen: false,
  isMounted: false,
}

export default (initialState = defaultState) => {
  const [isLoading, setIsLoading] = React.useState(initialState.isLoading)
  const [isMenuOpen, setIsMenuOpen] = React.useState(initialState.isMenuOpen)
  const [isMounted, setIsMounted] = React.useState(initialState.isMounted)

  // Helpers

  const closeAppMenus = () => {
    setIsMenuOpen(false)
  }

  // Private handlers

  const handleMount = React.useCallback(() => {
    setIsMounted(true)
  }, [])

  const handleResize = React.useCallback(() => {
    if (CLOSE_MENUS_ON_RESIZE) {
      closeAppMenus()
    }
  }, [])

  const handleRouteChangeStart = React.useCallback(() => {
    setIsLoading(true)
    closeAppMenus()
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

  const onMenuButtonClick = () => {
    setIsMenuOpen(prev => !prev)
  }

  const onMenuClose = () => {
    setIsMenuOpen(false)
  }

  const onMenuExited = () => {}

  return {
    // Computed properties
    isBackdropOpen: isLoading,
    // Normal properties
    isLoading,
    isMenuOpen,
    isMounted,
    onMenuButtonClick,
    onMenuClose,
    onMenuExited,
  }
}
