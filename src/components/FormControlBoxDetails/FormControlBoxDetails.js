import * as React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { styled } from '@mui/material'
import classes from './formControlBoxDetailsClasses'

const FormControlBoxDetailsRoot = styled('div', {
  overridesResolver: (props, styles) => styles.root,
})({
  padding: 'var(--_spacing)',
  paddingTop: 0,
  paddingLeft: 'calc(var(--_inset) - var(--_edge))',
})

const FormControlBoxDetails = React.forwardRef(function FormControlBoxDetails(props, ref) {
  const { children, className, ...other } = props

  return (
    <FormControlBoxDetailsRoot className={clsx(classes.root, className)} ref={ref} {...other}>
      {children}
    </FormControlBoxDetailsRoot>
  )
})

FormControlBoxDetails.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default FormControlBoxDetails
