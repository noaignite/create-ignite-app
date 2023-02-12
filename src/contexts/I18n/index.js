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
  const { children, locale, i18n: pagePropsI18n } = props

  i18n.load(locale, pagePropsI18n)
  i18n.activate(locale)

  return <LinguiI18nProvider i18n={i18n}>{children}</LinguiI18nProvider>
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
  i18n: PropTypes.object,
  locale: PropTypes.string,
}

export default I18nProvider
