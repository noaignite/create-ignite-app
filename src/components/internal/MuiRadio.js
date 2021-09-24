import * as React from 'react'
import RadioButtonCheckedIcon from '../icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '../icons/RadioButtonUnchecked'

const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <RadioButtonCheckedIcon />,
    icon: <RadioButtonUncheckedIcon />,
  },
  styleOverrides: {
    root: {
      '&:hover': {
        backgroundColor: 'transparent', // Disable Mui backgroundColor
      },
    },
  },
}

export default overrides
