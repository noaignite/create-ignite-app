import * as React from 'react'
import { MenuItem } from '@mui/material'
import storySelectArgType from '../utils/storySelectArgType'
import TextField from './TextField'

export default {
  title: 'Components/TextField',
  component: TextField,
  argTypes: {
    color: storySelectArgType(['primary', 'secondary']),
    margin: storySelectArgType(['none', 'dense', 'normal']),
    size: storySelectArgType(['medium', 'small']),
    variant: storySelectArgType(['standard', 'outlined', 'filled']),
  },
}

const Template = (args) => {
  const [value, setValue] = React.useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <TextField onChange={handleChange} value={value} {...args}>
      {args.select &&
        Array.from(new Array(4), (_, idx) => (
          <MenuItem key={idx} value={idx + 1}>
            Value {idx + 1}
          </MenuItem>
        ))}
    </TextField>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'primary',
  disabled: false,
  error: false,
  fullWidth: false,
  helperText: 'Field description',
  hiddenLabel: false,
  label: 'Field label',
  margin: 'none',
  multiline: false,
  placeholder: 'Field placeholder',
  required: false,
  select: false,
  size: 'medium',
  variant: 'standard',
}
