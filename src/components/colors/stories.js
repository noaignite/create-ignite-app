import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Palette from '../internal/Palette'
import Swatch from '../internal/Swatch'
import * as colors from '.'

function isValidPaletteColor([name, color]) {
  return name === 'divider' || typeof color === 'object'
}

function sortEntriesByKeyMap(entries, orderArr) {
  return entries.slice(0).sort(([a], [b]) => {
    const primA = orderArr.indexOf(a)
    const primB = orderArr.indexOf(b)
    const hasA = primA !== -1
    const hasB = primB !== -1

    if (hasA && hasB) {
      return primA - primB
    }
    if (hasA) {
      return -1
    }
    if (hasB) {
      return 1
    }
    return entries.indexOf(a) - entries.indexOf(b)
  })
}

const SYSTEM_SORT_ORDER = ['common', 'grey']
const PALETTE_SORT_ORDER = ['common', 'text', 'divider', 'background', 'action']

export default {
  title: 'Common/Colors',
}

const Template1 = () => {
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
        <div key={name}>
          <Swatch color={color} name={name} />
        </div>
      ))}
    </div>
  )
}

export const SystemColors = Template1.bind({})
SystemColors.args = {}

const Template2 = () => {
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

export const ThemeColors = Template2.bind({})
ThemeColors.args = {}
