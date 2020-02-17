// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
// Updated to functional component from docs https://nextjs.org/docs/advanced-features/custom-app

import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from 'src/theme.default'
import AppBase from 'containers/App'
// As of NextJS 9, all global css *must* be imported in pages/_app.js
// https://github.com/zeit/next.js/blob/master/errors/css-global.md
import 'swiper/css/swiper.min.css'

const App = props => {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />

      <AppBase>
        <Component {...pageProps} />
      </AppBase>
    </ThemeProvider>
  )
}

App.propTypes = {
  Component: PropTypes.element.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default App
