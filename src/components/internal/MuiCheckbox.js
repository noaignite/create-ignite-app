import * as React from 'react'
import CheckBoxIcon from '../icons/CheckBox'
import CheckBoxOutlineBlankIcon from '../icons/CheckBoxOutlineBlank'

const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <CheckBoxIcon />,
    icon: <CheckBoxOutlineBlankIcon />,
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
