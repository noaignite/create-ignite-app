import React from 'react'
import { storiesOf } from '@storybook/react'
import useTheme from '@material-ui/core/styles/useTheme'
import Palette from '../internal/Palette'
import Swatch from '../internal/Swatch'
import * as colors from '.'

const stories = storiesOf('Common/Colors', module)

stories.add('System Colors', () => (
  <div
    style={{
      display: 'grid',
      gridGap: 10,
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    }}
  >
    {Object.entries(colors).map(([name, color]) => (
      <Swatch key={name} color={color} name={name} />
    ))}
  </div>
))

const SORT_ORDER = ['common', 'text', 'divider', 'background', 'action', 'primary', 'secondary']

function isValidColor([name, color]) {
  return name === 'divider' || typeof color === 'object'
}

stories.add('Theme Palette', () => {
  const { palette } = useTheme()

  const paletteEntries = Object.entries(palette)
  const colorEntries = paletteEntries.filter(isValidColor)
  const sortedColorEntries = colorEntries.reduce((acc, val) => {
    const sortIdx = SORT_ORDER.indexOf(val[0])
    if (sortIdx !== -1) {
      acc[sortIdx] = val
    } else {
      acc.push(val)
    }

    return acc
  }, new Array(SORT_ORDER.length))

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
})
