// @inheritedComponent IconButton

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import capitalize from '@oakwood/oui-utils/capitalize'
import KeyboardArrowLeftIcon from '../icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '../icons/KeyboardArrowRight'
import IconButton from '../IconButton'

export const styles = theme => ({
  root: {
    position: 'absolute',
    zIndex: 9,
    top: '50%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    transform: 'translateY(-50%)',
    transition: theme.transitions.create(['box-shadow', 'color', 'opacity'], {
      duration: theme.transitions.duration.shortest,
    }),
    '&:hover': {
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[4],
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
    <IconButton
      className={classnames(classes.root, classes[variant], className)}
      color={color}
      aria-label={`${capitalize(variant)} slide`}
      ref={ref}
      {...other}
    >
      {children || <Icon color="inherit" fontSize="large" {...IconProps} />}
    </IconButton>
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
