import * as React from 'react'
import PropTypes from 'prop-types'
import { styled, useTheme } from '@mui/material'

const SwatchRoot = styled('div')({
  position: 'relative',
  border: '1px solid currentColor',
})

const SwatchMainShade = styled('div')({
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gridTemplateRows: '50px auto',
  padding: 16,
})

const SwatchShade = styled('div')({
  padding: '0 16px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  minHeight: 34,
})

/**
 * @ignore - internal component.
 */
const Swatch = React.forwardRef(function Swatch(props, ref) {
  const { color, mainShade = 500, name, ...other } = props

  const { palette } = useTheme()
  const mainColor = color[mainShade]

  return (
    <SwatchRoot ref={ref} {...other}>
      <SwatchMainShade
        style={{
          backgroundColor: mainColor,
          color: mainColor ? palette.getContrastText(mainColor) : '',
        }}
      >
        <strong>{name}</strong>
        <span />

        <span>{mainShade}</span>
        <span>{mainColor}</span>
      </SwatchMainShade>

      {Object.entries(color).map(([key, value]) => (
        <SwatchShade
          key={key}
          style={{
            backgroundColor: typeof value === 'string' ? value : undefined,
            color: typeof value === 'string' ? palette.getContrastText(value) : '',
          }}
        >
          <span>{key}</span>
          <span>{value}</span>
        </SwatchShade>
      ))}
    </SwatchRoot>
  )
})

Swatch.propTypes = {
  color: PropTypes.object.isRequired,
  mainShade: PropTypes.string,
  name: PropTypes.string,
}

export default Swatch
