import '../scripts/globals'
import * as React from 'react'
import { RouterContext } from 'next/dist/shared/lib/router-context' // next 13 (using next/router) / next 12
import { useColorScheme } from '@mui/material'
import { settings } from '~/api/__mock__'
import { RootProvider } from '~/contexts'
import { breakpoints } from '~/components'

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
  nextRouter: {
    Provider: RouterContext.Provider, // next 13 (using next/router) / next < 12
  },
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
  themeMode: {
    name: 'Theme mode',
    description: 'Global theme mode for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: ['light', 'dark'],
    },
  },
}

function ModeSwitcher(props) {
  const { mode } = props

  const { setMode } = useColorScheme()

  React.useEffect(() => {
    setMode(mode)
  }, [mode])

  return null
}

export const decorators = [
  (Story, context) => (
    <RootProvider settings={settings}>
      <ModeSwitcher mode={context.globals.themeMode} />
      <Story />
    </RootProvider>
  ),
]
