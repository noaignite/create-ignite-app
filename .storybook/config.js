import * as React from 'react'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { withKnobs, select } from '@storybook/addon-knobs'
import MuiThemeProvider from '@material-ui/styles/ThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import createTheme from 'components/styles/createTheme'
import './nextRouterCompat'
// As of NextJS 9, all global css *must* be imported in pages/_app.js
// https://github.com/zeit/next.js/blob/master/errors/css-global.md
import 'swiper/css/swiper.min.css'

const context = require.context('../src', true, /\/*stories\.js$/)

function loadStories() {
  context.keys().forEach(filepath => context(filepath))
}

addParameters({
  options: {
    storySort: (a, b) => {
      if (a[1].kind === b[1].kind) {
        return 0
      }

      return a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
})

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
addDecorator(withA11y)

configure(loadStories, module)
