import * as React from 'react'
import { useAppHandlers } from 'containers/App/AppContext'

export default function useHeaderless() {
  const { setHideHeader } = useAppHandlers()

  React.useEffect(() => {
    setHideHeader(true)
    return () => {
      setHideHeader(false)
    }
  }, [setHideHeader])
}
