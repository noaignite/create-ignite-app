import { generateUtilityClass, generateUtilityClasses } from '@mui/base'

export function getFormControlBoxUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBox', slot)
}

const formControlBoxClasses = generateUtilityClasses('CiaFormControlBox', ['root', 'region'])

export default formControlBoxClasses
