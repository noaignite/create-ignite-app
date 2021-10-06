import * as React from 'react'
import { useAppHandlers } from 'containers/App/AppContext'

// Page level hook used to skip rendering of site footer. Reverts back to
// rendering to page upon unmounting the page component.
export default function useFooterless() {
  const { setHideFooter } = useAppHandlers()

  React.useEffect(() => {
    setHideFooter(true)
    return () => {
      setHideFooter(false)
    }
  }, [setHideFooter])
}
