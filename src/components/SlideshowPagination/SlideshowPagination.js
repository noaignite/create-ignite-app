import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 9,
    bottom: 15,
    left: 0,
    width: '100%',
    // Insufficient slides
    '&[class*="lock"]': {
      display: 'none',
    },
    // Default bullet
    '& > *': {
      display: 'inline-block',
      width: 6,
      height: 6,
      padding: 0,
      border: 'none',
      borderRadius: '100%',
      outline: 'none',
      background: theme.palette.text.primary,
      opacity: 0.2,
      cursor: 'default',
      transition: theme.transitions.create(['opacity']),
    },
    // Horizontal bullet
    '[class*="horizontal"] & > *': {
      margin: '0 4px',
    },
    // Vertical bullet
    '[class*="vertical"] & > *': {
      margin: '4px 0',
    },
    // Clickable bullet
    '& > *[role="button"]': {
      cursor: 'pointer',
      '&:not([class*="active"]):hover, &:not([class*="active"]):focus': {
        opacity: 0.4,
      },
    },
    // Active bullet
    '& > *[class*="active"]': {
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
