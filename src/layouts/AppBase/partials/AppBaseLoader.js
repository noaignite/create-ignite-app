import * as React from 'react'
import Router from 'next/router'
import { styled } from '@mui/material'

const AppBaseLoaderRoot = styled('div')(({ theme }) => ({
  position: 'fixed',
  inset: '0 0 auto',
  zIndex: theme.zIndex.tooltip,
  height: 2,
  backgroundColor: theme.vars.palette.primary.main,
  transformOrigin: 'left center',
  transform: 'scaleX(0)',
  pointerEvents: 'none',
}))

const AppBaseLoader = React.memo(function AppBaseLoader(props) {
  const rootRef = React.useRef(null)
  const animationsRef = React.useRef({
    scale: null,
    fade: null,
  })

  const handleRouteChangeStart = React.useCallback(() => {
    animationsRef.current.scale.updatePlaybackRate(1)
    animationsRef.current.scale.cancel()
    animationsRef.current.fade.cancel()

    animationsRef.current.scale.play()
  }, [])

  const handleRouteChangeComplete = React.useCallback(() => {
    animationsRef.current.scale.updatePlaybackRate(30)
  }, [])

  React.useEffect(() => {
    animationsRef.current.scale = rootRef.current.animate(
      [
        { transform: 'scaleX(0)' },
        { transform: 'scaleX(0.3)' },
        { transform: 'scaleX(0.4)' },
        { transform: 'scaleX(0.5)' },
        { transform: 'scaleX(0.6)' },
        { transform: 'scaleX(0.7)' },
        { transform: 'scaleX(0.8)' },
        { transform: 'scaleX(0.9)' },
        { transform: 'scaleX(1)' },
      ],
      {
        duration: 5000,
        easing: 'ease-out',
      },
    )
    animationsRef.current.scale.cancel()

    animationsRef.current.fade = rootRef.current.animate(
      [
        { transform: 'scaleX(1)', opacity: 1 },
        { transform: 'scaleX(1)', opacity: 0 },
      ],
      {
        duration: 300,
        easing: 'ease-out',
      },
    )
    animationsRef.current.fade.cancel()

    animationsRef.current.scale.onfinish = () => {
      animationsRef.current.fade.play()
    }
  }, [])

  React.useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleRouteChangeStart, handleRouteChangeComplete])

  return <AppBaseLoaderRoot ref={rootRef} {...props} />
})

export default AppBaseLoader
