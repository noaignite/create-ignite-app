import * as React from 'react'
import { SvgIcon } from '@mui/material'

export default function createSvgIcon(path, displayName, viewBox) {
  const Component = React.memo(
    React.forwardRef((props, ref) => (
      <SvgIcon viewBox={viewBox} ref={ref} {...props}>
        {path}
      </SvgIcon>
    )),
  )

  if (process.env.NODE_ENV !== 'production') {
    Component.displayName = `${displayName}Icon`
  }

  Component.uiName = SvgIcon.uiName || SvgIcon.muiName

  return Component
}
