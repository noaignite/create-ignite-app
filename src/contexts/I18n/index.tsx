import * as React from 'react'
import PropTypes from 'prop-types'
import i18n, { i18nConfig } from 'es2015-i18n-tag'

interface I18n {
  /**
   * The default locale set up in `next.config.js`.
   *
   * @note The default value is a create-ignite-app project default and may be
   * configured differently in your project.
   *
   * @default 'en'
   */
  defaultLocale: string
  /**
   * The current locale.
   *
   * @note The default value is a create-ignite-app project default and may be
   * configured differently in your project.
   *
   * @default 'en'
   */
  locale: string
  /**
   * A function that returns a translated string based on the current locale.
   *
   * @example t(__translationGroup)`Hello, ${name}!`
   * @see https://github.com/skolmer/es2015-i18n-tag
   */
  t: typeof i18n
}

type I18nCTX = I18n | undefined
export const I18nContext = React.createContext<I18nCTX>(undefined)

if (process.env.NODE_ENV !== 'production') {
  I18nContext.displayName = 'I18nContext'
}

export function useI18n() {
  const context = React.useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within a I18nProvider')
  }
  return context
}

interface I18nProviderProps {
  children: React.ReactNode
  defaultLocale?: string
  locale: string
}

function I18nProvider(props: I18nProviderProps) {
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
