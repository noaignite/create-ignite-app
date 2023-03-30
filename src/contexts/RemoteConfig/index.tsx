import * as React from 'react'
import PropTypes from 'prop-types'
import { useI18n } from '../I18n'

type RemoteConfig = {
  /**
   * An object containing the remotely fetched key / value pairs.
   * @note Locally, defaults to data exported from `src/api/cms/settings.js`
   *
   * @note RECOMMENDATION: When a config is set up in a CMS and passed
   * into this codebase, please remove the contents of this type and replace
   * it with the actual type data from the CMS.
   */
  [key in string]: unknown
}

type RemoteConfigCTX = RemoteConfig | undefined
export const RemoteConfigContext = React.createContext<RemoteConfigCTX>(undefined)

if (process.env.NODE_ENV !== 'production') {
  RemoteConfigContext.displayName = 'RemoteConfigContext'
}

export function useRemoteConfig() {
  const context = React.useContext(RemoteConfigContext)
  if (!context) {
    throw new Error('useRemoteConfig must be used within a RemoteConfigProvider')
  }
  return context
}

interface RemoteConfigProviderProps {
  children: React.ReactNode
  value?: RemoteConfig
}

function RemoteConfigProvider(props: RemoteConfigProviderProps) {
  // console.log(props)
  const { children, value = {} } = props

  const { locale } = useI18n()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const contextValue = React.useMemo(() => value, [locale])

  return (
    <RemoteConfigContext.Provider value={contextValue}>{children}</RemoteConfigContext.Provider>
  )
}

RemoteConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
}

export default RemoteConfigProvider
