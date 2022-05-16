import * as React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'
import { getTheme } from './index'

function ThemeProvider(props) {
  const { children, mode, theme: localTheme } = props

  const theme = getTheme(localTheme, mode)

  return (
    <EmotionThemeProvider
      // Bug: Custom theme not propagated within Storybook.js
      // https://github.com/mui-org/material-ui/issues/24282#issuecomment-859393395
      theme={theme}
    >
      <CssVarsProvider theme={theme}>{children}</CssVarsProvider>
    </EmotionThemeProvider>
  )
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['dark', 'light', 'inverted']),
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default ThemeProvider
