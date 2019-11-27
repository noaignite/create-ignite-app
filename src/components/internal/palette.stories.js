import React from 'react'
import { storiesOf } from '@storybook/react'
import useTheme from '@material-ui/core/styles/useTheme'
import Typography from '../Typography'
import Palette from './Palette'

const stories = storiesOf('Common/Palette', module)

function renderPaletteGroup(group, groupName) {
  return Object.entries(group).map(([name, value], idx) => (
    <Palette key={idx} color={value} label={`${groupName}.${name}`} />
  ))
}

const Default = () => {
  const { palette } = useTheme()

  return (
    <div>
      <Typography variant="h4">Common</Typography>
      {renderPaletteGroup(palette.common, 'common')}

      <Typography variant="h4">Text</Typography>
      {renderPaletteGroup(palette.text, 'text')}

      <Typography variant="h4">Divider</Typography>
      <Palette color={palette.divider} label="divider" />

      <Typography variant="h4">Background</Typography>
      {renderPaletteGroup(palette.background, 'background')}

      <Typography variant="h4">Action</Typography>
      {renderPaletteGroup(palette.action, 'action')}

      <Typography variant="h4">Error</Typography>
      {renderPaletteGroup(palette.error, 'error')}

      <Typography variant="h4">Grey</Typography>
      {renderPaletteGroup(palette.grey, 'grey')}

      <Typography variant="h4">Primary</Typography>
      {renderPaletteGroup(palette.primary, 'primary')}

      <Typography variant="h4">Secondary</Typography>
      {renderPaletteGroup(palette.secondary, 'secondary')}
    </div>
  )
}

stories.add('Default', () => <Default />)
