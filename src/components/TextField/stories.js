import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'
import TextField from './TextField'

const stories = storiesOf('Components/TextField', module)

export const Default = () => {
  const selectKnob = boolean('select', false)

  return (
    <TextField
      disabled={boolean('disabled', false)}
      error={boolean('error', false)}
      fullWidth={boolean('fullWidth', false)}
      helperText={text('helperText', 'Field description')}
      label={text('label', 'Field label')}
      margin={select('margin', ['none', 'dense', 'normal'], 'none')}
      multiline={boolean('multiline', false)}
      placeholder={text('placeholder', 'Field placeholder')}
      required={boolean('required', false)}
      select={selectKnob}
      variant={select('variant', ['standard', 'outlined', 'filled'], 'outlined')}
    >
      {selectKnob && (
        <>
          <option>Value 1</option>
          <option>Value 2</option>
          <option>Value 3</option>
        </>
      )}
    </TextField>
  )
}

stories.add('Default', Default)

export default TextField
