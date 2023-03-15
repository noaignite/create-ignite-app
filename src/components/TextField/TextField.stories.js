import * as React from 'react'
import { MenuItem, TextField } from '@mui/material'

export default {
  component: TextField,
  argTypes: {
    color: {
      control: 'select',
      options: ['text', 'primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    margin: {
      control: 'select',
      options: ['none', 'dense', 'normal'],
    },
    size: {
      control: 'select',
      options: ['medium', 'small'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'outlined', 'filled'],
    },
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

export const Default = {
  args: {
    color: 'text',
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
    variant: 'outlined',
  },
  render: Template,
}
