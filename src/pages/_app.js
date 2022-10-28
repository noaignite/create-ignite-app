// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
import '../../scripts/globals'
import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { RootProvider } from '~/contexts'
import * as layoutVariants from '~/layouts'

function App(props) {
  const { Component, emotionCache, pageProps: pagePropsProp } = props

  const { defaultLocale, headerColor, headerMode, layout, locale, page, ...pageProps } =
    pagePropsProp
  const LayoutComponent = layout ? layoutVariants[layout] : layoutVariants.App

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>

      <RootProvider
        emotionCache={emotionCache}
        defaultLocale={defaultLocale}
        locale={locale}
        {...pageProps}
      >
        <LayoutComponent headerColor={headerColor} headerMode={headerMode}>
          <Component {...page} />
        </LayoutComponent>
      </RootProvider>
    </React.Fragment>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
}

export default App
