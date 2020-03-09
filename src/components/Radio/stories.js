import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Radio from './Radio'

const stories = storiesOf('Components/Radio', module)

export const Default = () => (
  <Radio
    checked={boolean('checked', false)}
    color={select('color', ['primary', 'secondary', 'default'], 'default')}
    disabled={boolean('disabled', false)}
  />
)

stories.add('Default', Default)

export default Radio
