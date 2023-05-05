import * as React from 'react'
import { colors as muiColors } from '@mui/material'
import Swatch from '../internal/Swatch'
import * as localColors from '.'

const colors = { ...muiColors, ...localColors }

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

export default {
  title: 'Common/Colors',
}

const Template = () => {
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

export const Default = {
  render: Template,
}
