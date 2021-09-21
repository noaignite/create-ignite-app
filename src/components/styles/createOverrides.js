import { overrides as MuiButton } from '../Button/Button'
import { overrides as MuiIconButton } from '../IconButton/IconButton'
import * as internalComponents from '../internal'

export default function createOverrides(theme) {
  const components = {
    ...internalComponents,
    MuiButton,
    MuiIconButton,
  }

  const overridesOutput = Object.entries(components).reduce((acc, [muiName, overrides]) => {
    const { defaultProps, styleOverrides } = overrides

    acc[muiName] = {
      defaultProps,
      styleOverrides: typeof styleOverrides === 'function' ? styleOverrides(theme) : styleOverrides,
    }

    return acc
  }, {})

  return overridesOutput
}
