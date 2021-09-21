import * as React from 'react'
import CheckBoxIcon from '../icons/CheckBox'
import CheckBoxOutlineBlankIcon from '../icons/CheckBoxOutlineBlank'

export { default } from '@mui/material/Checkbox'

export const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <CheckBoxIcon />,
    icon: <CheckBoxOutlineBlankIcon />,
  },
}
