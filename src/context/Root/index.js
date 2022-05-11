import * as React from 'react'
import PropTypes from 'prop-types'
import { CssBaseline } from '@mui/material'
import { defaultTheme, ThemeProvider } from '~/components'
import { CentraProvider } from '../Centra'
import GlobalProvider from '../Global'
import I18nProvider from '../I18n'
import RemoteConfigProvider from '../RemoteConfig'

function RootProvider(props) {
  const { children, defaultLocale, locale, settings, theme } = props

  return (
    <I18nProvider defaultLocale={defaultLocale} locale={locale}>
      <RemoteConfigProvider value={settings}>
        <CentraProvider
          apiUrl={process.env.CENTRA_CHECKOUT_API}
          paymentFailedPage=""
          paymentReturnPage=""
        >
          <GlobalProvider>
            <ThemeProvider theme={defaultTheme} mode={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />

              {children}
            </ThemeProvider>
          </GlobalProvider>
        </CentraProvider>
      </RemoteConfigProvider>
    </I18nProvider>
  )
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLocale: PropTypes.string,
  locale: PropTypes.string,
  settings: PropTypes.object,
  theme: PropTypes.string,
}

export default RootProvider
