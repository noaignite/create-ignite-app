import * as React from 'react'
import { DEFAULT_HEADER_MODE, useAppHandlers } from 'containers/App/AppContext'

// Page level hook used to set the desired site header mode. Reverts back to
// default header mode upon unmounting the page component.
export default function useHeaderMode(color) {
  const { setHeaderMode } = useAppHandlers()

  React.useEffect(() => {
    if (color) {
      setHeaderMode(color)
      return () => {
        setHeaderMode(DEFAULT_HEADER_MODE)
      }
    }

    return undefined
  }, [color, setHeaderMode])
}
