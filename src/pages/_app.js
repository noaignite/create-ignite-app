// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js

// import '../../scripts/wdyr'
import '../../scripts/polyfills'
import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { CacheProvider } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { settings as mockedCmsProps } from 'api/mock'
import { CheckoutProvider, I18nProvider, SettingsProvider } from 'api'
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

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>

      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />

        <I18nProvider defaultLocale={defaultLocale} locale={locale}>
          <SettingsProvider {...cmsProps}>
            <CheckoutProvider>
              <AppProvider>
                <AppBase
                  disableFooter={pageProps?.disableFooter}
                  disableHeader={pageProps?.disableHeader}
                  headerMode={pageProps?.headerMode}
                >
                  <Component {...pageProps} />
                </AppBase>
              </AppProvider>
            </CheckoutProvider>
          </SettingsProvider>
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
