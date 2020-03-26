import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'
import MenuItem from '../MenuItem'
import TextField from './TextField'

const stories = storiesOf('Components/TextField', module)

export const Default = () => {
  const labelKnob = text('label', 'Field label')
  const selectKnob = boolean('select', false)

  const [value, setValue] = React.useState('')
  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <TextField
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      helperText={text('helperText', 'Field description')}
      label={!selectKnob ? labelKnob : undefined}
      margin={select('margin', ['none', 'dense', 'normal'], 'none')}
      multiline={boolean('multiline', false)}
      placeholder={text('placeholder', 'Field placeholder')}
      required={boolean('required', false)}
      select={selectKnob}
      variant={select('variant', ['standard', 'outlined', 'filled'], 'outlined')}
      onChange={handleChange}
      value={value}
    >
      {selectKnob && [
        <MenuItem key="0" value="">
          Choose value
        </MenuItem>,
        <MenuItem key="1" value="1">
          Value 1
        </MenuItem>,
        <MenuItem key="2" value="2">
          Value 2
        </MenuItem>,
        <MenuItem key="3" value="3">
          Value 3
        </MenuItem>,
      ]}
    </TextField>
  )
}

stories.add('Default', Default)

export default TextField
