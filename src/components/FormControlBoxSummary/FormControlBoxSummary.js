import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { refType } from '@mui/utils'
import { styled } from '@mui/material'
import FormControlBoxContext from '../FormControlBox/FormControlBoxContext'
import classes from './formControlBoxSummaryClasses'

const FormControlBoxSummaryRoot = styled('div', {
  overridesResolver: (props, styles) => styles.root,
})({
  display: 'flex',
})

const FormControlBoxSummaryLabel = styled('label', {
  overridesResolver: (props, styles) => styles.label,
})({
  display: 'flex',
  flexGrow: 1,
  padding: 'var(--_spacing) 0',
  cursor: 'pointer',
})

const FormControlBoxSummaryInputWrapper = styled('div', {
  overridesResolver: (props, styles) => styles.inputWrapper,
})({
  minWidth: 'var(--_inset)',
  marginLeft: 'calc(var(--_edge) * -1)',
})

const FormControlBoxSummaryContent = styled('div', {
  overridesResolver: (props, styles) => styles.content,
})({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

const FormControlBoxSummaryEndAdornment = styled('div', {
  overridesResolver: (props, styles) => styles.endAdornment,
})(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexShrink: 0,
  padding: 'var(--_spacing) 0',
  marginLeft: theme.spacing(2),
}))

const FormControlBoxSummary = React.forwardRef(function FormControlBoxSummary(props, ref) {
  const { children, className, endAdornment, ...other } = props

  const { checked, control, controlProps, disabled, expanded } =
    React.useContext(FormControlBoxContext)

  const ownerState = {
    checked,
    disabled,
    expanded,
  }

  return (
    <FormControlBoxSummaryRoot
      className={clsx(classes.root, className)}
      ownerState={ownerState}
      ref={ref}
      {...other}
    >
      <FormControlBoxSummaryLabel className={classes.label}>
        <FormControlBoxSummaryInputWrapper className={classes.inputWrapper}>
          {React.cloneElement(control, controlProps)}
        </FormControlBoxSummaryInputWrapper>

        <FormControlBoxSummaryContent className={classes.content}>
          {children}
        </FormControlBoxSummaryContent>
      </FormControlBoxSummaryLabel>

      {endAdornment && (
        <FormControlBoxSummaryEndAdornment className={classes.endAdornment}>
          {endAdornment}
        </FormControlBoxSummaryEndAdornment>
      )}
    </FormControlBoxSummaryRoot>
  )
})

FormControlBoxSummary.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  expanded: PropTypes.bool,
  helperText: PropTypes.node,
  helperTextProps: PropTypes.object,
  inputRef: refType,
  label: PropTypes.node,
  labelProps: PropTypes.object,
  endAdornment: PropTypes.node,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
}

export default FormControlBoxSummary
