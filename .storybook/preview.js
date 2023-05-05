import '../scripts/globals'
import * as React from 'react'
import { useColorScheme } from '@mui/material'
import { settings } from '~/api/__mock__'
import { RootProvider } from '~/contexts'
import { breakpoints } from '~/components'

function ModeSwitcher(props) {
  // eslint-disable-next-line react/prop-types
  const { mode } = props

  const { setMode } = useColorScheme()

  React.useEffect(() => {
    setMode(mode)
  }, [mode, setMode])

  return null
}

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

const preview = {
  decorators: [
    (Story, context) => (
      <RootProvider settings={settings}>
        <ModeSwitcher mode={context.globals.themeMode} />
        <Story />
      </RootProvider>
    ),
  ],
  globalTypes: {
    themeMode: {
      description: 'Global theme mode for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme mode',
        icon: 'circlehollow',
        items: ['light', 'dark'],
      },
    },
  },
  parameters: {
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
  },
}

export default preview
