import * as React from 'react'
import PropTypes from 'prop-types'
import { deepmerge } from '@mui/utils'
import { ThemeProvider as MuiThemeProvider } from '@mui/material'
import { createPalette } from '../styles'

function mergeThemePaletteMode(theme, mode) {
  return deepmerge(theme, { palette: createPalette({ mode }) })
}

// Export to not have to define again in ./storybook.index.js
export function getTheme(localTheme, paletteMode) {
  let mode = paletteMode

  if (localTheme) {
    return mergeThemePaletteMode(localTheme, mode)
  }

  return (outerTheme) => {
    if (mode === 'inverted') {
      mode = outerTheme.palette.mode === 'light' ? 'dark' : 'light'
    }

    return mergeThemePaletteMode(outerTheme, mode)
  }
}

function ThemeProvider(props) {
  const { children, mode, theme: localTheme } = props

  const theme = getTheme(localTheme, mode)

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  mode: PropTypes.oneOf(['dark', 'light', 'inverted']),
  theme: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
}

export default ThemeProvider
