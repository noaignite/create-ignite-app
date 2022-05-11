import * as React from 'react'
import ThemeProvider from '../ThemeProvider'

export default function withInvertedTheme(Component) {
  return (props) => (
    <ThemeProvider mode="inverted">
      <Component {...props} />
    </ThemeProvider>
  )
}
