import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from '@mui/utils'

export function getFormControlBoxUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBox', slot, 'Cia')
}

const formControlBoxClasses = generateUtilityClasses('CiaFormControlBox', ['root', 'region'], 'Cia')

export default formControlBoxClasses
