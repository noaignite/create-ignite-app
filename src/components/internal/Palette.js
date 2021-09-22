import * as React from 'react'
import PropTypes from 'prop-types'
import { styled } from '@mui/system'
import { useTheme } from '@mui/material/styles'

const PaletteRoot = styled('div', {
  name: 'Palette',
  slot: 'Root',
})({
  position: 'relative',
  border: '1px solid currentColor',
})

const PaletteMainShade = styled('div', {
  name: 'Palette',
  slot: 'MainShade',
})({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: '50px auto',
  padding: 16,
})

const PaletteShade = styled('div', {
  name: 'Palette',
  slot: 'Shade',
})({
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 34,
})

/**
 * @ignore - internal component.
 */
const Palette = React.forwardRef(function Palette(props, ref) {
  const { color: colorProp, name, ...other } = props

  const { palette } = useTheme()

  // Fix for palette groups like `divider`.
  let color = colorProp
  if (typeof color !== 'object') {
    color = { [name]: color }
  }

  return (
    <PaletteRoot ref={ref} {...other}>
      <PaletteMainShade>
        <strong>{name}</strong>
      </PaletteMainShade>

      {Object.entries(color).map(([key, value]) => (
        <PaletteShade
          key={key}
          style={{
            backgroundColor: typeof value === 'string' ? value : undefined,
            color: typeof value === 'string' ? palette.getContrastText(value) : '',
          }}
        >
          <span>{key}</span>
          <span>{value}</span>
        </PaletteShade>
      ))}
    </PaletteRoot>
  )
})

Palette.propTypes = {
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  mainShade: PropTypes.string,
  name: PropTypes.string,
}

export default Palette
