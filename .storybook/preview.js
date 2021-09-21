// import '../scripts/wdyr'
import '../scripts/polyfills'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
import { global } from 'api/mock'
import { CheckoutProvider, GlobalProvider, I18nProvider } from 'api'
import { AppProvider } from 'containers/App/AppContext'
import createTheme from 'components/styles/createTheme'

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
        <StyledEngineProvider
          // @todo Is this needed?
          // https://next.material-ui.com/guides/migration-v4/#style-library
          injectFirst
        >
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <I18nProvider>
              <GlobalProvider {...global}>
                <CheckoutProvider>
                  <AppProvider>
                    <Story />
                  </AppProvider>
                </CheckoutProvider>
              </GlobalProvider>
            </I18nProvider>
          </ThemeProvider>
        </StyledEngineProvider>
      </EmotionThemeProvider>
    )
  },
]
