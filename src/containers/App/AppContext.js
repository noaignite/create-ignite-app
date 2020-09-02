import * as React from 'react'
import PropTypes from 'prop-types'
import { compose, nest, withProps } from 'recompose'
import useCreateContext from './useCreateContext'

const AppContext = React.createContext()

if (process.env.NODE_ENV !== 'production') {
  AppContext.displayName = 'AppContext'
}

export function useAppContext() {
  return React.useContext(AppContext)
}

export function AppContextProvider(props) {
  const context = useCreateContext(props)
  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
}

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export function withAppContextProvider(props) {
  return (Component) => nest(compose(withProps(props))(AppContextProvider), Component)
}

export default AppContext
