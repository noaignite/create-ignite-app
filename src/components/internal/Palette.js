import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@mui/styles'
import { useTheme } from '@mui/material/styles'

export const styles = (theme) => ({
  root: {
    position: 'relative',
    border: `1px solid ${theme.palette.text.primary}`,
  },
  mainShade: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    padding: theme.spacing(1.5, 2),
  },
  mainShadeKey: {},
  mainShadeValue: {
    display: 'block',
    marginTop: theme.spacing(5),
  },
  shade: {
    ...theme.mixins.gutters(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 34,
  },
})

/**
 * @ignore - internal component.
 */
const Palette = React.forwardRef(function Palette(props, ref) {
  const { classes, className, color: colorProp, name, ...other } = props

  const { palette } = useTheme()

  // Fix for palette groups like `divider`.
  let color = colorProp
  if (typeof color !== 'object') {
    color = { [name]: color }
  }

  return (
    <div className={clsx(classes.root, className)} ref={ref} {...other}>
      <div className={classes.mainShade}>
        <strong>{name}</strong>
      </div>

      {Object.entries(color).map(([key, value]) => (
        <div
          key={key}
          className={classes.shade}
          style={{
            backgroundColor: typeof value === 'string' ? value : undefined,
            color: value && value.length > 3 ? palette.getContrastText(value) : '',
          }}
        >
          <span>{key}</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  )
})

Palette.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  mainShade: PropTypes.string,
  name: PropTypes.string,
}

export default withStyles(styles)(Palette)
