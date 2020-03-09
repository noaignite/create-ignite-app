import * as React from 'react'
import SvgIcon from '../SvgIcon'

export default function createSvgIcon(path, displayName) {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon ref={ref} {...props}>
        {path}
      </SvgIcon>
    )),
  )

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`
  }

  Component.uiName = SvgIcon.uiName || 'SvgIcon'

  return Component
}
