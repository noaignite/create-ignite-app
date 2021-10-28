import * as React from 'react'
import PropTypes from 'prop-types'

const SettingsContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  SettingsContext.displayName = 'SettingsContext'
}

export function useSettings() {
  return React.useContext(SettingsContext)
}

export function SettingsProvider(props) {
  const { children, ...other } = props

  const { current: contextValue } = React.useRef(other)

  return <SettingsContext.Provider value={contextValue}>{children}</SettingsContext.Provider>
}

SettingsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SettingsContext
