// based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js

import React from 'react'
import App from 'next/app'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'src/theme.default'
import AppBase from 'containers/App'

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <React.Fragment>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />

          <AppBase>
            <Component {...pageProps} />
          </AppBase>
        </ThemeProvider>
      </React.Fragment>
    )
  }
}
