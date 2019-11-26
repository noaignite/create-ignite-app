import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, select } from '@storybook/addon-knobs'
import Checkbox from '../Checkbox'
import FormControlLabel from './FormControlLabel'

const stories = storiesOf('Components/FormControlLabel', module)

export const Default = () => (
  <FormControlLabel
    checked={boolean('checked', false)}
    control={<Checkbox />}
    disabled={boolean('disabled', false)}
    label={text('label', 'Field label')}
    labelPlacement={select('labelPlacement', ['end', 'start'], 'end')}
  />
)

stories.add('Default', Default)

export default FormControlLabel
