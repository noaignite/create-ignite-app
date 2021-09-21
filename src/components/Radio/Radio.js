import * as React from 'react'
import RadioButtonCheckedIcon from '../icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '../icons/RadioButtonUnchecked'

export { default } from '@mui/material/Radio'

export const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <RadioButtonCheckedIcon />,
    icon: <RadioButtonUncheckedIcon />,
  },
}
