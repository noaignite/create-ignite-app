import * as React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../i18n'

export const CmsContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  CmsContext.displayName = 'CmsContext'
}

export function useCms() {
  return React.useContext(CmsContext)
}

export function CmsProvider(props) {
  const { children, ...other } = props

  const { locale } = useI18n()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = React.useMemo(() => other, [locale])

  return <CmsContext.Provider value={contextValue}>{children}</CmsContext.Provider>
}

CmsProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
