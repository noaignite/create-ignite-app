import React from 'react'
import { useAppHandlers } from 'containers/App/AppContext'

export default function useFooterless() {
  const { setHideFooter } = useAppHandlers()

  React.useEffect(() => {
    setHideFooter(true)
    return () => {
      setHideFooter(false)
    }
  }, [setHideFooter])
}
