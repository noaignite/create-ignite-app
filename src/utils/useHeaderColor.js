import * as React from 'react'
import { useAppHandlers } from 'containers/App/AppContext'

export default function useHeaderColor(color) {
  const { setAppBarColor } = useAppHandlers()

  React.useLayoutEffect(() => {
    if (color) {
      setAppBarColor(color)
      return () => {
        setAppBarColor('default')
      }
    }

    return undefined
  }, [color, setAppBarColor])
}
