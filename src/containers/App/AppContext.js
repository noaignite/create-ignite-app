import React from 'react'
import PropTypes from 'prop-types'
import { compose, nest, withProps } from 'recompose'
import useContext from './useContext'

export const AppContext = React.createContext({})

export const AppProvider = ({ initialState, ...other }) => {
  const context = useContext(initialState, other)
  return <AppContext.Provider value={context}>{other.children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
  initialState: PropTypes.object,
}

export const withAppProvider = initialState => Component =>
  nest(compose(withProps({ initialState }))(AppProvider), Component)

export const useAppContext = () => React.useContext(AppContext)

export const withAppContext = () => compose(withProps(useAppContext))

export default AppContext
