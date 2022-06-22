import * as React from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import createEmotionCache from '~/utils/createEmotionCache'
import { defaultTheme, ThemeProvider } from '~/components'
import { CentraProvider } from '../Centra'
import GlobalProvider from '../Global'
import I18nProvider from '../I18n'
import RemoteConfigProvider from '../RemoteConfig'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
// Disable "potentially unsafe selector when doing server-side rendering" for Storybook.
clientSideEmotionCache.compat = process.env.STORYBOOK === 'true'

function RootProvider(props) {
  const {
    children,
    defaultLocale,
    emotionCache = clientSideEmotionCache,
    locale,
    initialSelection,
    settings,
    theme,
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <I18nProvider defaultLocale={defaultLocale} locale={locale}>
        <RemoteConfigProvider value={settings}>
          <CentraProvider
            apiUrl={process.env.CENTRA_CHECKOUT_API}
            initialSelection={initialSelection}
            paymentFailedPage={`${process.env.APP_URL}/api/centra/payment-failed`}
            paymentReturnPage={`${process.env.APP_URL}/api/centra/payment-return`}
            receiptPage={`${process.env.APP_URL}/checkout/success`}
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
    </CacheProvider>
  )
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLocale: PropTypes.string,
  emotionCache: PropTypes.object,
  initialSelection: PropTypes.object,
  locale: PropTypes.string,
  settings: PropTypes.object,
  theme: PropTypes.string,
}

export default RootProvider
