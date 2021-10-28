// import '../scripts/wdyr'
import '../scripts/polyfills'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { settings } from 'api/mock'
import { CheckoutProvider, I18nProvider, SettingsProvider } from 'api'
import { AppProvider } from 'containers/App/AppContext'
import { createTheme } from 'components/styles'

export const parameters = {
  layout: 'fullscreen',
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Common', 'Components', 'Containers', 'Blocks', 'Pages'],
    },
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
            <SettingsProvider {...settings}>
              <CheckoutProvider>
                <AppProvider>
                  <Story />
                </AppProvider>
              </CheckoutProvider>
            </SettingsProvider>
          </I18nProvider>
        </ThemeProvider>
      </EmotionThemeProvider>
    )
  },
]
