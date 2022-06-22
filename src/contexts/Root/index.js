import * as React from 'react'
import PropTypes from 'prop-types'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { defaultTheme } from '~/components'
import { CentraProvider } from '../Centra'
import GlobalProvider from '../Global'
import I18nProvider from '../I18n'
import RemoteConfigProvider from '../RemoteConfig'

function RootProvider(props) {
  const { children, defaultLocale, locale, settings } = props

  return (
    <I18nProvider defaultLocale={defaultLocale} locale={locale}>
      <RemoteConfigProvider value={settings}>
        <CentraProvider
          apiUrl={process.env.CENTRA_CHECKOUT_API}
          paymentFailedPage=""
          paymentReturnPage=""
        >
          <GlobalProvider>
            <CssVarsProvider theme={defaultTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />

              {children}
            </CssVarsProvider>
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
}

export default RootProvider
