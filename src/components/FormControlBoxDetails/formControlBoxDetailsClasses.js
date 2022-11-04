import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from '@mui/utils'

export function getFormControlBoxDetailsUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBoxDetails', slot, 'Cia')
}

const formControlBoxDetailsClasses = generateUtilityClasses(
  'CiaFormControlBoxDetails',
  ['root'],
  'Cia',
)

export default formControlBoxDetailsClasses
