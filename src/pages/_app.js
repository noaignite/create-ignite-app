// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js

import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'src/theme.light'
import { cmsProps as mockedCmsProps } from 'api/mock'
import { AppProvider } from 'containers/App/AppContext'
import { GlobalProvider } from 'containers/Global/GlobalContext'
import AppBase from 'containers/App'
// As of NextJS 9, all global css *must* be imported in pages/_app.js
// https://github.com/zeit/next.js/blob/master/errors/css-global.md
import 'swiper/swiper-bundle.min.css'

function App(props) {
  const { Component, pageProps, cmsProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>

      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      <GlobalProvider {...cmsProps}>
        <AppProvider>
          <AppBase>
            <Component {...pageProps} />
          </AppBase>
        </AppProvider>
      </GlobalProvider>
    </ThemeProvider>
  )
}

App.getInitialProps = async (props) => {
  const { Component, ctx } = props

  let cmsProps = {}
  if (ctx.req) {
    // @todo - Replace `mockedCmsProps` with cms fetch
    cmsProps = mockedCmsProps
  }

  let pageProps = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return {
    cmsProps,
    pageProps,
  }
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
  cmsProps: PropTypes.object.isRequired,
}

export default App
