// @inheritedComponent AppBar

import React from 'react'
import PropTypes from 'prop-types'
import { debounce, useForkRef } from '@oakwood/oui-utils'
import AppBar from 'components/AppBar'

const useEnhancedEffect = typeof window !== 'undefined' ? React.useLayoutEffect : React.useEffect

const AppAppBar = React.forwardRef(function AppAppBar(props, ref) {
  const { children, ...other } = props

  const rootRef = React.useRef(null)
  const handleRef = useForkRef(rootRef, ref)

  const [height, setHeight] = React.useState(0)

  const syncHeight = React.useCallback(() => {
    const clientHeight = rootRef.current ? rootRef.current.clientHeight : 0
    setHeight(clientHeight)
  }, [])

  React.useEffect(() => {
    const handleResize = debounce(() => {
      syncHeight()
    })

    window.addEventListener('resize', handleResize)
    return () => {
      handleResize.clear()
      window.removeEventListener('resize', handleResize)
    }
  }, [syncHeight])

  useEnhancedEffect(() => {
    syncHeight()
  })

  return (
    <AppBar ref={handleRef} {...other}>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
          :root { --coa-header-height: ${height}px }
          .coa-fixed { padding-top: ${height}px }
        `,
        }}
      />
      {children}
    </AppBar>
  )
})

AppAppBar.propTypes = {
  children: PropTypes.node.isRequired,
}

AppAppBar.uiName = 'AppAppBar'

export default AppAppBar
