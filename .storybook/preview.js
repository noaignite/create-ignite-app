import '../scripts/polyfills'
import { CssBaseline } from '@mui/material'
import { settings as remoteConfig } from '~/api/__mock__'
import { CentraProvider, GlobalProvider, I18nProvider, RemoteConfigProvider } from '~/context'
import { breakpoints, defaultTheme, ThemeProvider } from '~/components'

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

    return (
      <ThemeProvider theme={defaultTheme} mode={mode}>
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
    )
  },
]
