import * as React from 'react'
import { useAppHandlers } from 'containers/App/AppContext'

// Page level hook used to skip rendering of site header. Reverts back to
// rendering to page upon unmounting the page component.
export default function useHeaderless() {
  const { setHideHeader } = useAppHandlers()

  React.useEffect(() => {
    setHideHeader(true)
    return () => {
      setHideHeader(false)
    }
  }, [setHideHeader])
}
