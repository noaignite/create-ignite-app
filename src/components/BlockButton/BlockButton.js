// @inheritedComponent ButtonBase

import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { withStyles } from '@material-ui/core/styles'
import ButtonBase from '@material-ui/core/ButtonBase'

export const styles = (theme) => ({
  root: {
    display: 'block',
    position: 'relative',
    zIndex: 0, // Prevents :after from falling behind parent elements.
    color: 'inherit',
    '&:after': {
      ...theme.mixins.absolute(),
      content: '""',
      pointerEvents: 'none',
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    '&:hover:after': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
    },
    '&$backgroundOverlay:after': {
      zIndex: -1,
    },
    '&$focusVisible:after': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$selected:after, &$selected:hover:after': {
      backgroundColor: theme.palette.action.selected,
    },
    '&$disabled': {
      opacity: 0.5,
    },
  },
  backgroundOverlay: {},
  focusVisible: {},
  disabled: {},
  selected: {},
})

const BlockButton = React.forwardRef(function BlockButton(props, ref) {
  const {
    children,
    classes,
    className,
    disabled,
    focusVisibleClassName,
    overlayPlacement = 'foreground',
    selected,
    ...other
  } = props

  return (
    <ButtonBase
      className={clsx(
        classes.root,
        {
          [classes.backgroundOverlay]: overlayPlacement !== 'foreground',
          [classes.disabled]: disabled,
          [classes.selected]: selected,
        },
        className,
      )}
      focusVisibleClassName={clsx(classes.focusVisible, focusVisibleClassName)}
      disabled={disabled}
      ref={ref}
      aria-pressed={selected}
      {...other}
    >
      {children}
    </ButtonBase>
  )
})

BlockButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  focusVisibleClassName: PropTypes.string,
  overlayPlacement: PropTypes.oneOf(['background', 'foreground']),
  selected: PropTypes.bool,
}

export default withStyles(styles)(BlockButton)
