import * as React from 'react'
import RadioButtonCheckedIcon from '../icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '../icons/RadioButtonUnchecked'

const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <RadioButtonCheckedIcon />,
    icon: <RadioButtonUncheckedIcon />,
  },
}

export default overrides
