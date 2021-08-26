import { overrides as MuiAppBar } from '../AppBar/AppBar'
import { overrides as MuiBackdrop } from '../Backdrop/Backdrop'
import { overrides as MuiButton } from '../Button/Button'
import { overrides as MuiContainer } from '../Container/Container'
import { overrides as MuiIconButton } from '../IconButton/IconButton'
import { overrides as MuiToolbar } from '../Toolbar/Toolbar'
import * as internalComponents from '../internal'

export default function createOverrides(theme) {
  const components = {
    ...internalComponents,
    MuiAppBar,
    MuiBackdrop,
    MuiButton,
    MuiContainer,
    MuiIconButton,
    MuiToolbar,
  }

  const overridesOutput = Object.entries(components).reduce((acc, [muiName, overrides]) => {
    const { defaultProps, styles } = overrides

    acc[muiName] = {
      defaultProps,
      styleOverrides: typeof styles === 'function' ? styles(theme) : styles,
    }

    return acc
  }, {})

  return overridesOutput
}
