import React from 'react'
import { useAppContext } from 'containers/App/AppContext'

export default function useFixedAppBar() {
  const { setIsAppBarFixed } = useAppContext()

  React.useEffect(() => {
    setIsAppBarFixed(true)

    return () => {
      setIsAppBarFixed(false)
    }
  }, [setIsAppBarFixed])
}
