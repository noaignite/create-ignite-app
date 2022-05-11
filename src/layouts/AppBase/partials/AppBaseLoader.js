// @inheritedComponent Backdrop

import * as React from 'react'
import Router from 'next/router'
import { styled } from '@mui/system'
import { Backdrop, CircularProgress } from '@mui/material'

const AppBaseLoaderRoot = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.appBar - 1,
}))

function AppBaseLoader(props) {
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
    <AppBaseLoaderRoot open={loading} unmountOnExit {...props}>
      <CircularProgress />
    </AppBaseLoaderRoot>
  )
}

export default AppBaseLoader
