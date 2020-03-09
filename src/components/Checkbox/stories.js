import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Checkbox from './Checkbox'

const stories = storiesOf('Components/Checkbox', module)

export const Default = () => (
  <Checkbox
    checked={boolean('checked', false)}
    color={select('color', ['primary', 'secondary', 'default'], 'default')}
    disabled={boolean('disabled', false)}
  />
)

stories.add('Default', Default)

export default Checkbox
