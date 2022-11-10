import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { chainPropTypes, refType } from '@mui/utils'
import { Collapse, styled, useFormControl, useRadioGroup } from '@mui/material'
import FormControlBoxContext from './FormControlBoxContext'
import classes from './formControlBoxClasses'

const FormControlBoxRoot = styled('div', {
  overridesResolver: (props, styles) => {
    const { ownerState } = props

    return [styles.root, ownerState.divider && styles.divider]
  },
})(({ theme, ownerState }) => ({
  '--_edge': 'var(--cia-form-control-box-edge, 11px)',
  '--_inset': 'var(--cia-form-control-box-inset, 52px)',
  '--_spacing': `var(--cia-form-control-box-spacing, ${theme.spacing(2)})`,
  position: 'relative',
  ...(ownerState.divider && {
    borderTop: `1px solid ${theme.vars.palette.divider}`,
    borderBottom: `1px solid ${theme.vars.palette.divider}`,
    '& + &': {
      borderTop: 0,
    },
  }),
}))

function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b)
}

const FormControlBox = React.forwardRef(function FormControlBox(props, ref) {
  const {
    checked: checkedProp,
    children: childrenProp,
    className,
    control,
    disabled: disabledProp,
    divider,
    expanded: expandedProp,
    inputRef,
    name,
    onChange,
    TransitionComponent = Collapse,
    TransitionProps,
    value,
    ...other
  } = props

  const formControl = useFormControl()
  const radioGroup = useRadioGroup()

  let checked = checkedProp
  if (typeof checked === 'undefined' && radioGroup) {
    checked = areEqualValues(radioGroup.value, props.value)
  }

  let disabled = disabledProp
  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled
  }
  if (typeof disabled === 'undefined' && formControl) {
    disabled = formControl.disabled
  }

  let expanded = expandedProp
  if (typeof expanded === 'undefined' && checked) {
    expanded = checked
  }

  const controlProps = {
    disabled,
  }

  ;['checked', 'name', 'onChange', 'value', 'inputRef'].forEach((key) => {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key]
    }
  })

  const [summary, ...children] = React.Children.toArray(childrenProp)

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    checked,
    control,
    controlProps,
    disabled,
    expanded,
  }

  const ownerState = {
    checked,
    disabled,
    divider,
    expanded,
  }

  return (
    <FormControlBoxRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      ref={ref}
      {...other}
    >
      <FormControlBoxContext.Provider value={contextValue}>
        {summary}
      </FormControlBoxContext.Provider>

      {children && (
        <TransitionComponent in={expanded} timeout="auto" {...TransitionProps}>
          <div
            aria-labelledby={summary.props.id}
            id={summary.props['aria-controls']}
            role="region"
            className={classes.region}
          >
            {children}
          </div>
        </TransitionComponent>
      )}
    </FormControlBoxRoot>
  )
})

FormControlBox.propTypes = {
  checked: PropTypes.bool,
  children: chainPropTypes(PropTypes.node.isRequired, (props) => {
    const summary = React.Children.toArray(props.children)[0]
    if (!React.isValidElement(summary)) {
      return new Error('CIA: Expected the first child of FormControlBox to be a valid element.')
    }

    return null
  }),
  className: PropTypes.string,
  control: PropTypes.element.isRequired,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  expanded: PropTypes.bool,
  inputRef: refType,
  name: PropTypes.string,
  onChange: PropTypes.func,
  TransitionComponent: PropTypes.elementType,
  TransitionProps: PropTypes.object,
  value: PropTypes.any,
}

export default FormControlBox
