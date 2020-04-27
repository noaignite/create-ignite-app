import * as React from 'react'
import { useAppHandlers } from 'containers/App/AppContext'

export default function useFixedAppBar() {
  const { setIsAppBarFixed } = useAppHandlers()

  React.useEffect(() => {
    setIsAppBarFixed(true)

    return () => {
      setIsAppBarFixed(false)
    }
  }, [setIsAppBarFixed])
}
