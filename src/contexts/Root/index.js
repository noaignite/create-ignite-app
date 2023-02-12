import * as React from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'
import createEmotionCache from '~/utils/createEmotionCache'
import { defaultTheme } from '~/components'
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
    emotionCache = clientSideEmotionCache,
    i18n,
    locale,
    initialSelection,
    settings,
  } = props

  return (
    <CacheProvider value={emotionCache}>
      <I18nProvider i18n={i18n} locale={locale}>
        <RemoteConfigProvider value={settings}>
          <CentraProvider
            apiUrl={process.env.CENTRA_CHECKOUT_API}
            initialSelection={initialSelection}
            paymentFailedPage={`${process.env.APP_URL}/api/centra/payment-failed`}
            paymentReturnPage={`${process.env.APP_URL}/api/centra/payment-return`}
            receiptPage={`${process.env.APP_URL}/checkout/success`}
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
    </CacheProvider>
  )
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
  emotionCache: PropTypes.object,
  initialSelection: PropTypes.object,
  i18n: PropTypes.object,
  locale: PropTypes.string,
  settings: PropTypes.object,
}

export default RootProvider
