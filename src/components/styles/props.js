import * as React from 'react'
import CheckBoxIcon from '../icons/CheckBox'
import CheckBoxOutlineBlankIcon from '../icons/CheckBoxOutlineBlank'
import RadioButtonCheckedIcon from '../icons/RadioButtonChecked'
import RadioButtonUncheckedIcon from '../icons/RadioButtonUnchecked'
import ArrowDropDownIcon from '../icons/ArrowDropDown'

const props = {
  MuiAppBar: {
    color: 'default',
    elevation: 0,
  },
  MuiButtonBase: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  MuiButton: {
    disableElevation: true,
  },
  MuiCheckbox: {
    color: 'default',
    checkedIcon: <CheckBoxIcon />,
    icon: <CheckBoxOutlineBlankIcon />,
  },
  MuiLink: {
    color: 'inherit',
  },
  MuiPaper: {
    elevation: 0,
    square: true,
  },
  MuiRadio: {
    color: 'default',
    checkedIcon: <RadioButtonCheckedIcon />,
    icon: <RadioButtonUncheckedIcon />,
  },
  MuiSelect: {
    IconComponent: ArrowDropDownIcon,
  },
}

export default props
