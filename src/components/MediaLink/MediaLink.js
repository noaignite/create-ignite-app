import * as React from 'react'
import PropTypes from 'prop-types'
import classnames from 'clsx'
import { elementTypeAcceptingRef } from '@material-ui/utils'
import { useForkRef, useIsFocusVisible } from '@material-ui/core/utils'
import withStyles from '@material-ui/core/styles/withStyles'

export const styles = (theme) => ({
  root: {
    display: 'block',
    position: 'relative',
  },
  overlay: {
    ...theme.mixins.absolute(),
    backgroundColor: theme.palette.action.hover,
    opacity: 0,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.short,
    }),
    'a:hover &': {
      opacity: 1,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        opacity: 1,
      },
    },
  },
  focusVisible: {},
})

const MediaLink = React.forwardRef(function MediaLink(props, ref) {
  const {
    children,
    classes,
    className,
    component: Component = 'a',
    onBlur,
    onFocus,
    ...other
  } = props

  const { isFocusVisible, onBlurVisible, ref: focusVisibleRef } = useIsFocusVisible()
  const [focusVisible, setFocusVisible] = React.useState(false)
  const handlerRef = useForkRef(ref, focusVisibleRef)

  const handleBlur = (event) => {
    if (focusVisible) {
      onBlurVisible()
      setFocusVisible(false)
    }
    if (onBlur) {
      onBlur(event)
    }
  }

  const handleFocus = (event) => {
    if (isFocusVisible(event)) {
      setFocusVisible(true)
    }
    if (onFocus) {
      onFocus(event)
    }
  }

  return (
    <Component
      className={classnames(
        classes.root,
        {
          [classes.focusVisible]: focusVisible,
        },
        className,
      )}
      onBlur={handleBlur}
      onFocus={handleFocus}
      ref={handlerRef}
      {...other}
    >
      {children}
      <div className={classes.overlay} />
    </Component>
  )
})

MediaLink.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  component: elementTypeAcceptingRef,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
}

MediaLink.uiName = 'MediaLink'

export default withStyles(styles)(MediaLink)
