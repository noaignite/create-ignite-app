import * as React from 'react'
import PropTypes from 'prop-types'
import { nest } from 'recompose'
import useContextCreator from './useContextCreator'

const AppContext = React.createContext()

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

export function useAppContext() {
  return React.useContext(AppContext)
}

export function AppContextProvider(props) {
  const context = useContextCreator(props)
  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function withAppContextProvider(Component) {
  return nest(AppContextProvider, Component)
}

export default AppContext
