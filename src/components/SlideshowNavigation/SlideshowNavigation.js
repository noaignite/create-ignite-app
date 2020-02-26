// @inheritedComponent Fab

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import KeyboardArrowLeftIcon from '../icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '../icons/KeyboardArrowRight'
import Fab from '../Fab'

export const styles = theme => ({
  root: {
    position: 'absolute',
    zIndex: 9,
    top: '50%',
    transform: 'translateY(-50%)',
    transition: theme.transitions.create(['background-color', 'box-shadow', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
  },
  prev: {
    left: theme.spacing(1),
  },
  next: {
    right: theme.spacing(1),
  },
})

const variantComponent = {
  prev: KeyboardArrowLeftIcon,
  next: KeyboardArrowRightIcon,
}

const SlideshowNavigation = React.forwardRef(function SlideshowNavigation(props, ref) {
  const { children, classes, className, IconProps, variant, ...other } = props

  const Icon = variantComponent[variant]

  return (
    <Fab className={classnames(classes.root, classes[variant], className)} ref={ref} {...other}>
      {children || <Icon color="inherit" fontSize="large" {...IconProps} />}
    </Fab>
  )
})

SlideshowNavigation.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  IconProps: PropTypes.object,
  variant: PropTypes.oneOf(['prev', 'next']).isRequired,
}

SlideshowNavigation.uiName = 'SlideshowNavigation'

export default withStyles(styles)(SlideshowNavigation)
