import * as React from 'react'

/**
 * @ignore - internal component.
 */
const FormControlBoxContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  FormControlBoxContext.displayName = 'FormControlBoxContext'
}

export default FormControlBoxContext
