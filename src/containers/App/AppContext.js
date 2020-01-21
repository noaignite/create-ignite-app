import React from 'react'
import PropTypes from 'prop-types'
import { compose, nest, withProps } from 'recompose'
import useContext from './useContext'

export const AppContext = React.createContext({})

export const AppProvider = props => {
  const context = useContext(props)
  return <AppContext.Provider value={context}>{props.children}</AppContext.Provider>
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const withAppProvider = props => Component =>
  nest(compose(withProps(props))(AppProvider), Component)

export const useAppContext = () => React.useContext(AppContext)

export const withAppContext = () => compose(withProps(useAppContext))

export const WithAppContext = AppContext.Consumer

export default AppContext
