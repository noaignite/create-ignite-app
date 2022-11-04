import {
  unstable_generateUtilityClass as generateUtilityClass,
  unstable_generateUtilityClasses as generateUtilityClasses,
} from '@mui/utils'

export function getFormControlBoxSummaryUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBoxSummary', slot, 'Cia')
}

const formControlBoxSummaryClasses = generateUtilityClasses(
  'CiaFormControlBoxSummary',
  ['root', 'label', 'inputWrapper', 'content', 'endAdornment'],
  'Cia',
)

export default formControlBoxSummaryClasses
