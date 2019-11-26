// @inheritedComponent AppBar

import React from 'react'
import PropTypes from 'prop-types'
import { debounce, useForkRef } from '@oakwood/oui-utils'
import { constants } from 'components/styles/extras'
import AppBar from 'components/AppBar'

const AppAppBar = React.forwardRef(function AppAppBar(props, ref) {
  const { children, id = 'site-header', ...other } = props

  const rootRef = React.useRef(null)
  const [height, setHeight] = React.useState(constants.TOOLBAR_MIN_HEIGHT)

  const updateHeight = React.useCallback(() => {
    const clientHeight = rootRef.current ? rootRef.current.clientHeight : 0
    document.documentElement.style.setProperty(`--${id}-height`, `${clientHeight}px`)
    setHeight(clientHeight)
  }, [id])

  React.useEffect(() => {
    const handleResize = debounce(updateHeight, 200)
    updateHeight()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [children, updateHeight])

  const handleRef = useForkRef(rootRef, ref)

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
