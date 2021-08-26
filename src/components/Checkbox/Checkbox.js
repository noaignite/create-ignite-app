import * as React from 'react'
import CheckBoxIcon from '../icons/CheckBox'
import CheckBoxOutlineBlankIcon from '../icons/CheckBoxOutlineBlank'

export { default } from '@material-ui/core/Checkbox'

export const overrides = {
  defaultProps: {
    color: 'default',
    checkedIcon: <CheckBoxIcon />,
    icon: <CheckBoxOutlineBlankIcon />,
  },
}
