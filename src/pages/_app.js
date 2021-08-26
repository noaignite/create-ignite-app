// Based on https://github.com/mui-org/material-ui/blob/next/examples/nextjs/pages/_app.js

// import '../../scripts/wdyr'
import '../../scripts/polyfills'
import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import { global as mockedCmsProps } from 'api/mock'
import { CheckoutProvider, GlobalProvider, I18nProvider } from 'api'
import createEmotionCache from 'utils/createEmotionCache'
import theme from 'utils/theme.light'
import { AppProvider } from 'containers/App/AppContext'
import AppBase from 'containers/App'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

function App(props) {
  const {
    cmsProps,
    Component,
    defaultLocale,
    emotionCache = clientSideEmotionCache,
    locale,
    pageProps,
  } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
        </Head>

        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <I18nProvider defaultLocale={defaultLocale} locale={locale}>
          <GlobalProvider {...cmsProps}>
            <CheckoutProvider>
              <AppProvider>
                <AppBase>
                  <Component {...pageProps} />
                </AppBase>
              </AppProvider>
            </CheckoutProvider>
          </GlobalProvider>
        </I18nProvider>
      </ThemeProvider>
    </CacheProvider>
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
    defaultLocale: ctx.defaultLocale,
    locale: ctx.locale,
    pageProps,
  }
}

App.propTypes = {
  cmsProps: PropTypes.object.isRequired,
  Component: PropTypes.elementType.isRequired,
  defaultLocale: PropTypes.string.isRequired,
  emotionCache: PropTypes.object,
  locale: PropTypes.string.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
