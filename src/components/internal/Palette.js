import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import Typography from '../Typography'

export const styles = theme => ({
  root: {
    display: 'inline-block',
    minWidth: 160,
    padding: theme.spacing(1),
    textAlign: 'center',
  },
  circle: {
    ...theme.mixins.contain(80),
    borderRadius: '50%',
    border: '1px solid #000',
    '&::before': {
      display: 'block',
      content: '""',
      paddingBottom: '100%',
    },
  },
})

/**
 * @ignore - internal component.
 */
const Palette = React.forwardRef(function Palette(props, ref) {
  const { classes, className, color, label, ...other } = props

  return (
    <div className={classnames(classes.root, className)} ref={ref} {...other}>
      <div className={classes.circle} style={{ backgroundColor: color }} />
      <Typography variant="subtitle2">{label}</Typography>
      <Typography variant="subtitle2">{color}</Typography>
    </div>
  )
})

Palette.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.string.isRequired,
}

Palette.uiName = 'Palette'

export default withStyles(styles)(Palette)
