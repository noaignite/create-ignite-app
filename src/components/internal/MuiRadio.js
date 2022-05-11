import * as React from 'react'
import RadioButtonCheckedIcon from '../icons/RadioButtonCheckedIcon'
import RadioButtonUncheckedIcon from '../icons/RadioButtonUncheckedIcon'

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
