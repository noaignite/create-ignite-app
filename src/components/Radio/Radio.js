import * as React from 'react'
import RadioButtonCheckedIcon from '../icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '../icons/RadioButtonUnchecked'

export { default } from '@material-ui/core/Radio'

export const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <RadioButtonCheckedIcon />,
    icon: <RadioButtonUncheckedIcon />,
  },
}
