import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import createTheme from 'components/styles/createTheme'
import './nextRouterCompat'

const context = require.context('../src', true, /\/*stories\.js$/)

function loadStories() {
  context.keys().forEach(filepath => context(filepath))
}

addDecorator(storyFn => {
  // Register story knobs before global knobs.
  const story = storyFn()

  return (
    <MuiThemeProvider
      theme={createTheme({
        palette: {
          type: select('Theme Palette Type', ['light', 'dark'], 'light'),
        },
      })}
    >
      <CssBaseline />
      {story}
    </MuiThemeProvider>
  )
})
addDecorator(withKnobs)

configure(loadStories, module)
