import * as React from 'react'
import CheckBoxIcon from '../icons/CheckBoxIcon'
import CheckBoxOutlineBlankIcon from '../icons/CheckBoxOutlineBlankIcon'

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
