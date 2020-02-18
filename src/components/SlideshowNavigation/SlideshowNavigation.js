// @inheritedComponent Fab

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import capitalize from '@oakwood/oui-utils/capitalize'
import KeyboardArrowLeftIcon from '../icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '../icons/KeyboardArrowRight'
import Fab from '../Fab'

export const styles = theme => ({
  root: {
    position: 'absolute',
    zIndex: 9,
    top: '50%',
    backgroundColor: theme.palette.background.paper,
    transform: 'translateY(-50%)',
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
    },
    // Insufficient slides
    '&[class*="lock"]': {
      display: 'none',
    },
    // Disabled interaction
    '&[class*="disabled"]': {
      opacity: 0,
    },
  },
  previous: {
    left: theme.spacing(1),
  },
  next: {
    right: theme.spacing(1),
  },
})

const variantComponent = {
  previous: KeyboardArrowLeftIcon,
  next: KeyboardArrowRightIcon,
}

const SlideshowNavigation = React.forwardRef(function SlideshowNavigation(props, ref) {
  const { children, classes, className, color = 'inherit', IconProps, variant, ...other } = props

  const Icon = variantComponent[variant]

  return (
    <Fab
      className={classnames(classes.root, classes[variant], className)}
      color={color}
      aria-label={`${capitalize(variant)} slide`}
      ref={ref}
      {...other}
    >
      {children || <Icon color="inherit" fontSize="large" {...IconProps} />}
    </Fab>
  )
})

SlideshowNavigation.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  IconProps: PropTypes.object,
  variant: PropTypes.oneOf(['previous', 'next']).isRequired,
}

SlideshowNavigation.uiName = 'SlideshowNavigation'

export default withStyles(styles)(SlideshowNavigation)
