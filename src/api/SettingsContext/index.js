import * as React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../I18nContext'

const SettingsContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  SettingsContext.displayName = 'SettingsContext'
}

export function useSettings() {
  return React.useContext(SettingsContext)
}

export function SettingsProvider(props) {
  const { children, ...other } = props

  const { locale } = useI18n()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = React.useMemo(() => other, [locale])

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SettingsContext
