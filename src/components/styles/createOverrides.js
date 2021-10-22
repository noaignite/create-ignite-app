import * as components from '../internal'

export default function createOverrides(theme) {
  const overridesOutput = Object.entries(components).reduce((acc, [muiName, overrides]) => {
    acc[muiName] = {}
    Object.entries(overrides).forEach(([group, override]) => {
      acc[muiName][group] = typeof override === 'function' ? override(theme) : override
    })

    return acc
  }, {})

  return overridesOutput
}
