import * as React from 'react'

const RouterLink = React.forwardRef((props, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a ref={ref} {...props} />
))

export default RouterLink
