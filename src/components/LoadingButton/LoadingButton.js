import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { chainPropTypes } from '@material-ui/utils'
import { capitalize } from '@material-ui/core/utils'
import { withStyles } from '@material-ui/core/styles'
import { CircularProgress } from '@material-ui/core'
import Button from '../Button'

export const styles = () => ({
  /* Styles applied to the root element. */
  root: {},
  /* Styles applied to the root element if `pending={true}`. */
  pending: {},
  /* Styles applied to the pendingIndicator element. */
  pendingIndicator: {
    position: 'absolute',
    visibility: 'visible',
    display: 'flex',
  },
  /* Styles applied to the pendingIndicator element if `pendingPosition="center"`. */
  pendingIndicatorCenter: {
    left: '50%',
    transform: 'translate(-50%)',
  },
  /* Styles applied to the pendingIndicator element if `pendingPosition="start"`. */
  pendingIndicatorStart: {
    left: 14,
  },
  /* Styles applied to the pendingIndicator element if `pendingPosition="end"`. */
  pendingIndicatorEnd: {
    right: 14,
  },
  /* Styles applied to the endIcon element if `pending={true}` and `pendingPosition="end"`. */
  endIconPendingEnd: {
    visibility: 'hidden',
  },
  /* Styles applied to the startIcon element if `pending={true}` and `pendingPosition="start"`. */
  startIconPendingStart: {
    visibility: 'hidden',
  },
  /* Styles applied to the label element if `pending={true}` and `pendingPosition="center"`. */
  labelPendingCenter: {
    visibility: 'hidden',
  },
})

const PendingIndicator = <CircularProgress color="inherit" size={20} />

const LoadingButton = React.forwardRef(function LoadingButton(props, ref) {
  const {
    children,
    classes,
    className,
    disabled = false,
    pending = false,
    pendingIndicator = PendingIndicator,
    pendingPosition = 'center',
    ...other
  } = props

  return (
    <Button
      className={clsx(
        classes.root,
        {
          [classes.pending]: pending,
        },
        className,
      )}
      disabled={disabled || pending}
      ref={ref}
      classes={{
        startIcon: classes[`startIcon${pending ? 'Pending' : ''}${capitalize(pendingPosition)}`],
        endIcon: classes[`endIcon${pending ? 'Pending' : ''}${capitalize(pendingPosition)}`],
        label: classes[`label${pending ? 'Pending' : ''}${capitalize(pendingPosition)}`],
      }}
      {...other}
    >
      {pending && (
        <div
          className={clsx(
            classes.pendingIndicator,
            classes[`pendingIndicator${capitalize(pendingPosition)}`],
          )}
        >
          {pendingIndicator}
        </div>
      )}

      {children}
    </Button>
  )
})

LoadingButton.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  pending: PropTypes.bool,
  pendingIndicator: PropTypes.node,
  pendingPosition: chainPropTypes(PropTypes.oneOf(['start', 'end', 'center']), (props) => {
    if (props.pendingPosition === 'start' && !props.startIcon) {
      return new Error(
        `Material-UI: The pendingPosition="start" should be used in combination with startIcon.`,
      )
    }
    if (props.pendingPosition === 'end' && !props.endIcon) {
      return new Error(
        `Material-UI: The pendingPosition="end" should be used in combination with endIcon.`,
      )
    }
    return null
  }),
}

export default withStyles(styles)(LoadingButton)
