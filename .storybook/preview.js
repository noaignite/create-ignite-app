import '../scripts/polyfills'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { settings as remoteConfig } from '~/api/__mock__'
import { CentraProvider, GlobalProvider, I18nProvider, RemoteConfigProvider } from '~/context'
import { createTheme } from '~/components/styles'
import breakpoints from '~/components/styles/breakpoints'

const breakpointValues = {
  ...breakpoints.values,
  xs: 375,
}

const viewports = Object.entries(breakpointValues).reduce((acc, [key, val]) => {
  acc[key] = {
    name: key,
    styles: {
      width: `${val}px`,
      height: '960px',
    },
  }

  return acc
}, {})

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Common', 'Components', 'Containers', 'Blocks', 'Pages'],
    },
  },
  viewport: {
    viewports,
  },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}

export const decorators = [
  (Story, context) => {
    const mode = context.globals.theme
    const theme = createTheme({ palette: { mode } })

    return (
      <EmotionThemeProvider
        // Bug: Custom theme not propagated within Storybook.js
        // https://github.com/mui-org/material-ui/issues/24282#issuecomment-859393395
        theme={theme}
      >
        <ThemeProvider theme={theme}>
          <CssBaseline />

          <I18nProvider>
            <RemoteConfigProvider {...remoteConfig}>
              <CentraProvider>
                <GlobalProvider>
                  <Story />
                </GlobalProvider>
              </CentraProvider>
            </RemoteConfigProvider>
          </I18nProvider>
        </ThemeProvider>
      </EmotionThemeProvider>
    )
  },
]
