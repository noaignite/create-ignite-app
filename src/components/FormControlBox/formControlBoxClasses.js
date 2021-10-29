import { generateUtilityClass, generateUtilityClasses } from '@mui/core'

export function getFormControlBoxUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBox', slot)
}

const formControlBoxClasses = generateUtilityClasses('CiaFormControlBox', ['root', 'region'])

export default formControlBoxClasses
