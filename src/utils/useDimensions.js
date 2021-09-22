import * as React from 'react'
import { debounce } from '@mui/material/utils'

function isEqual(obj1, obj2) {
  return !Object.keys(obj1).some((key) => obj1[key] !== obj2[key])
}

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

export default function useDimensions(options = {}) {
  const { debounceDelay } = options

  const [node, ref] = React.useState(null)
  const [dimensions, setDimensions] = React.useState({
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    x: 0,
    y: 0,
  })

  const syncDimensions = React.useCallback(() => {
    if (node) {
      const rect = node.getBoundingClientRect().toJSON()

      setDimensions((prev) => {
        if (!isEqual(prev, rect)) {
          return rect
        }

        return prev
      })
    }
  }, [node])

  useEnhancedEffect(() => {
    syncDimensions()

    const handleResize = debounce(() => {
      syncDimensions()
    }, debounceDelay)

    window.addEventListener('resize', handleResize)
    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
    }
  }, [debounceDelay, syncDimensions])

  return [ref, dimensions, node]
}
