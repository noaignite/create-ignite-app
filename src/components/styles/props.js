import React from 'react'
import CheckboxCheckedIcon from '../icons/CheckboxChecked'
import CheckboxUncheckedIcon from '../icons/CheckboxUnchecked'
import RadioCheckedIcon from '../icons/RadioChecked'
import RadioUncheckedIcon from '../icons/RadioUnchecked'
import SelectArrowIcon from '../icons/SelectArrow'

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
    variant: 'outlined',
  },
  MuiCheckbox: {
    color: 'default',
    checkedIcon: <CheckboxCheckedIcon />,
    icon: <CheckboxUncheckedIcon />,
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
    checkedIcon: <RadioCheckedIcon />,
    icon: <RadioUncheckedIcon />,
  },
  MuiSelect: {
    displayEmpty: true,
    IconComponent: SelectArrowIcon,
    native: true,
  },
  MuiTextField: {
    variant: 'outlined',
  },
}

export default props
