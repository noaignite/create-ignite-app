import { generateUtilityClass, generateUtilityClasses } from '@mui/core'

export function getFormControlBoxSummaryUtilityClass(slot) {
  return generateUtilityClass('CiaFormControlBoxSummary', slot)
}

const formControlBoxSummaryClasses = generateUtilityClasses('CiaFormControlBoxSummary', [
  'root',
  'label',
  'inputWrapper',
  'content',
  'endAdornment',
])

export default formControlBoxSummaryClasses
