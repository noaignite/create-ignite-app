import React from 'react'
import { storiesOf } from '@storybook/react'
import useTheme from '@material-ui/core/styles/useTheme'
import Palette from '../internal/Palette'
import Swatch from '../internal/Swatch'
import * as colors from '.'

const stories = storiesOf('Common/Colors', module)

function isValidPaletteColor([name, color]) {
  return name === 'divider' || typeof color === 'object'
}

function sortEntriesByKeyMap(entries, orderArr) {
  return entries.reduce((acc, val) => {
    const sortIdx = orderArr.indexOf(val[0])
    if (sortIdx !== -1) {
      acc[sortIdx] = val
    } else {
      acc.push(val)
    }

    return acc
  }, new Array(orderArr.length))
}

const SYSTEM_SORT_ORDER = ['common', 'grey']
const PALETTE_SORT_ORDER = ['common', 'text', 'divider', 'background', 'action']

const SystemColors = () => {
  const colorEntries = Object.entries(colors)
  const sortedColors = sortEntriesByKeyMap(colorEntries, SYSTEM_SORT_ORDER)

  return (
    <div
      style={{
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      }}
    >
      {sortedColors.map(([name, color]) => (
        <Swatch key={name} color={color} name={name} />
      ))}
    </div>
  )
}

stories.add('System Colors', SystemColors)

const ThemePalette = () => {
  const { palette } = useTheme()

  const paletteEntries = Object.entries(palette)
  const colorEntries = paletteEntries.filter(isValidPaletteColor)
  const sortedColorEntries = sortEntriesByKeyMap(colorEntries, PALETTE_SORT_ORDER)

  return (
    <div
      style={{
        display: 'grid',
        gridGap: 10,
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      }}
    >
      {sortedColorEntries.map(([name, color]) => (
        <div key={name}>
          <Palette color={color} name={name} />
        </div>
      ))}
    </div>
  )
}

stories.add('Theme Palette', () => <ThemePalette />)
