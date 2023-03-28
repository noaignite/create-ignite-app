import * as React from 'react'
import PropTypes from 'prop-types'
import { i18n } from '@lingui/core'
import { I18nProvider as LinguiI18nProvider } from '@lingui/react'

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
    const { messages } = require(`@lingui/loader!../../../public/locales/${locale}/messages.po`)
    translations = messages
  } catch (err) {
    const {
      messages,
      // eslint-disable-next-line global-require, import/no-dynamic-require
    } = require(`@lingui/loader!../../../public/locales/${defaultLocale}/messages.po`)
    translations = messages
  }

  i18n.load(locale, translations)
  i18n.activate(locale)

  return <LinguiI18nProvider i18n={i18n}>{children}</LinguiI18nProvider>
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  defaultLocale: PropTypes.string,
  locale: PropTypes.string,
}

export default I18nProvider
