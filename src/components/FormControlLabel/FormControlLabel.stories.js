import * as React from 'react'
import { Checkbox, FormControlLabel, Radio } from '@mui/material'

export default {
  component: FormControlLabel,
  argTypes: {
    labelPlacement: {
      control: 'select',
      options: ['bottom', 'end', 'start', 'top'],
    },
  },
}

export const WithCheckbox = {
  args: {
    control: <Checkbox />,
    checked: false,
    disabled: false,
    label: 'Field label',
    labelPlacement: 'end',
  },
}

export const WithRadio = {
  args: {
    control: <Radio />,
    checked: false,
    disabled: false,
    label: 'Field label',
    labelPlacement: 'end',
  },
}
