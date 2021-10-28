import * as React from 'react'
import PropTypes from 'prop-types'
import i18n, { i18nConfig } from 'es2015-i18n-tag'

const I18nContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  I18nContext.displayName = 'I18nContext'
}

export function useI18n() {
  return React.useContext(I18nContext)
}

const DEFAULT_LOCALE = 'en'

export function I18nProvider(props) {
  const { children, defaultLocale = DEFAULT_LOCALE, locale } = props

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

  const contextValue = {
    defaultLocale,
    locale,
    t: i18n,
  }

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLocale: PropTypes.string,
  locale: PropTypes.string,
}

export default I18nContext
