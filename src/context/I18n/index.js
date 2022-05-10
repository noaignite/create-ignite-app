import * as React from 'react'
import PropTypes from 'prop-types'
import i18n, { i18nConfig } from 'es2015-i18n-tag'

export const I18nContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  I18nContext.displayName = 'I18nContext'
}

export function useI18n() {
  return React.useContext(I18nContext)
}

function I18nProvider(props) {
  const { children, defaultLocale = 'en', locale } = props

  let translations
  try {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    translations = require(`../../../public/locales/${locale}.json`)
  } catch (err) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    translations = require(`../../../public/locales/${defaultLocale}.json`)
  }

  i18nConfig({
    translations,
    // Intl DateTimeFormat options as described here: https://goo.gl/lslekB
    date: {},
    // Intl NumberFormat options as described here: https://goo.gl/pDwbG2
    number: {},
  })

  const contextValue = React.useMemo(
    () => ({
      defaultLocale,
      locale,
      t: i18n,
    }),
    [defaultLocale, locale],
  )

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLocale: PropTypes.string,
  locale: PropTypes.string,
}

export default I18nProvider
