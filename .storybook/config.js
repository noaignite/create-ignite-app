import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import createTheme from 'components/styles/createTheme'
import './nextRouterCompat'

const req = require.context('../src', true, /\/*stories\.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => {
  const content = story()
  return (
    <MuiThemeProvider
      theme={createTheme({
        palette: {
          type: select('Theme Palette', ['light', 'dark'], 'light'),
        },
      })}
    >
      <CssBaseline />
      {content}
    </MuiThemeProvider>
  )
})
addDecorator(withKnobs)

configure(loadStories, module)
