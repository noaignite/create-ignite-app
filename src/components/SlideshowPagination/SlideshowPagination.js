import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 9,
    // Horizontal pagination
    '[class*="horizontal"] &': {
      bottom: 15,
    },
    // Vertical pagination
    '[class*="vertical"] &': {
      right: 15,
    },
    // Default bullet
    '& > [class*="bullet"]': {
      display: 'inline-block',
      width: 8,
      height: 8,
      padding: 0,
      border: 'none',
      borderRadius: '100%',
      outline: 'none',
      background: theme.palette.text.primary,
      opacity: 0.2,
      transition: theme.transitions.create(['opacity']),
    },
    // Horizontal bullet
    '[class*="horizontal"] & > [class*="bullet"]': {
      margin: '0 4px',
    },
    // Vertical bullet
    '[class*="vertical"] & > [class*="bullet"]': {
      margin: '4px 0',
    },
    // Active bullet
    '& > [class*="active"]': {
      opacity: 0.8,
    },
  },
})

const SlideshowPagination = React.forwardRef(function SlideshowPagination(props, ref) {
  const { classes, className, ...other } = props

  return <div className={classnames(classes.root, className)} ref={ref} {...other} />
})

SlideshowPagination.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
}

SlideshowPagination.uiName = 'SlideshowPagination'

export default withStyles(styles)(SlideshowPagination)
