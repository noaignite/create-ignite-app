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
    acc[muiName] = {}
    Object.entries(overrides).forEach(([group, override]) => {
      acc[muiName][group] = typeof override === 'function' ? override(theme) : override
    })

    return acc
  }, {})

  return overridesOutput
}
