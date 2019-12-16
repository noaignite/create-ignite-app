// @inheritedComponent AppBar

import React from 'react'
import PropTypes from 'prop-types'
import { debounce, useForkRef } from '@oakwood/oui-utils'
import AppBar from 'components/AppBar'

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const AppAppBar = React.forwardRef(function AppAppBar(props, ref) {
  const { children, id = 'site-header', ...other } = props

  const rootRef = React.useRef(null)
  const handleRef = useForkRef(rootRef, ref)

  const [height, setHeight] = React.useState(0)

  const syncHeight = React.useCallback(() => {
    const clientHeight = rootRef.current ? rootRef.current.clientHeight : 0
    document.documentElement.style.setProperty(`--${id}-height`, `${clientHeight}px`)
    setHeight(clientHeight)
  }, [id])

  React.useEffect(() => {
    const handleResize = debounce(() => {
      syncHeight()
    })

    window.addEventListener('resize', handleResize)
    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
    }
  }, [children, syncHeight])

  useEnhancedEffect(() => {
    syncHeight()
  })

  return (
    <AppBar ref={handleRef} id={id} {...other}>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: `.${id} { padding-top: ${height}px; }` }}
      />
      {children}
    </AppBar>
  )
})

AppAppBar.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
}

AppAppBar.uiName = 'AppAppBar'

export default AppAppBar
