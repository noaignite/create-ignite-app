// @inheritedComponent Backdrop

import * as React from 'react'
import Router from 'next/router'
import { styled } from '@mui/system'
import { Backdrop, CircularProgress } from '@mui/material'

const AppLoaderRoot = styled(Backdrop, {
  name: 'AppLoader',
  slot: 'Root',
})(({ theme }) => ({
  zIndex: theme.zIndex.appBar - 1,
}))

const AppLoader = React.memo(function AppLoader(props) {
  const [loading, setLoading] = React.useState(false)

  const handleRouteChangeStart = React.useCallback(() => {
    setLoading(true)
  }, [])

  const handleRouteChangeComplete = React.useCallback(() => {
    setLoading(false)
  }, [])

  React.useEffect(() => {
    Router.events.on('routeChangeStart', handleRouteChangeStart)
    Router.events.on('routeChangeComplete', handleRouteChangeComplete)

    return () => {
      Router.events.off('routeChangeStart', handleRouteChangeStart)
      Router.events.off('routeChangeComplete', handleRouteChangeComplete)
    }
  }, [handleRouteChangeStart, handleRouteChangeComplete])

  return (
    <AppLoaderRoot open={loading} unmountOnExit {...props}>
      <CircularProgress />
    </AppLoaderRoot>
  )
})

export default AppLoader
