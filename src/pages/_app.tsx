// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
import '../../scripts/globals'
import * as React from 'react'
import Head from 'next/head'
import type { AppProps as NextAppProps } from 'next/app'
import type { NextPage } from 'next'
import type { EmotionCache } from '@emotion/cache'
import { RootProvider } from '~/contexts'
import * as layoutVariants from '~/layouts'

export interface AppProps extends NextAppProps {
  Component: NextPage<Page>
  emotionCache?: EmotionCache
  pageProps: {
    defaultLocale: string
    locale: string
    headerColor?: string
    headerMode?: string
    layout?: keyof typeof layoutVariants
    page: Page
    settings: Record<string, unknown>
    theme?: string
  }
}

function App(props: AppProps) {
  const { Component, emotionCache, pageProps: nextPageProps } = props

  const { defaultLocale, headerColor, headerMode, layout, locale, page, ...other } = nextPageProps
  const LayoutComponent = layout ? layoutVariants[layout] : layoutVariants.App

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>

      <RootProvider
        emotionCache={emotionCache}
        defaultLocale={defaultLocale}
        locale={locale}
        {...other}
      >
        <LayoutComponent headerColor={headerColor} headerMode={headerMode}>
          <Component {...page} />
        </LayoutComponent>
      </RootProvider>
    </React.Fragment>
  )
}

export default App
