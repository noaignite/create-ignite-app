import { overrides as MuiAppBar } from '../AppBar/AppBar'
import { overrides as MuiButton } from '../Button/Button'
import { overrides as MuiCheckbox } from '../Checkbox/Checkbox'
import { overrides as MuiContainer } from '../Container/Container'
import { overrides as MuiIconButton } from '../IconButton/IconButton'
import { overrides as MuiLink } from '../Link/Link'
import { overrides as MuiRadio } from '../Radio/Radio'
import { overrides as MuiToolbar } from '../Toolbar/Toolbar'
import * as internalComponents from '../internal'

export default function createOverrides(theme) {
  const components = {
    ...internalComponents,
    MuiAppBar,
    MuiButton,
    MuiCheckbox,
    MuiContainer,
    MuiIconButton,
    MuiLink,
    MuiRadio,
    MuiToolbar,
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
