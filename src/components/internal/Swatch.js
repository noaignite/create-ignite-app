import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { useTheme, withStyles } from '@material-ui/styles'

export const styles = (theme) => ({
  root: {
    position: 'relative',
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
const Swatch = React.forwardRef(function Swatch(props, ref) {
  const { classes, className, color, mainShade = 500, name, ...other } = props

  const { palette } = useTheme()
  const mainColor = color[mainShade]

  return (
    <div className={clsx(classes.root, className)} ref={ref} {...other}>
      <div
        className={classes.mainShade}
        style={{
          backgroundColor: mainColor,
          color: mainColor ? palette.getContrastText(mainColor) : '',
        }}
      >
        <span>
          <strong className={classes.mainShadeKey}>{name}</strong>
          {mainColor && <span className={classes.mainShadeValue}>{mainShade}</span>}
        </span>

        <span>{mainColor}</span>
      </div>

      {Object.entries(color).map(([key, value]) => (
        <div
          key={key}
          className={classes.shade}
          style={{
            backgroundColor: value,
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

Swatch.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.object.isRequired,
  mainShade: PropTypes.string,
  name: PropTypes.string,
}

export default withStyles(styles)(Swatch)
