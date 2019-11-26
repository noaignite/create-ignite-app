import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import CrossIcon from '../icons/Cross'
import Button from './Button'

const stories = storiesOf('Components/Button', module)

export const Default = () => (
  <Button
    color={select('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
    size={select('size', ['small', 'medium', 'large'], 'medium')}
    variant={select('variant', ['text', 'outlined', 'contained'], 'outlined')}
    disabled={boolean('disabled', false)}
    fullWidth={boolean('fullWidth', false)}
  >
    Just a button
  </Button>
)

export const WithIcons = () => (
  <Button endIcon={<CrossIcon />} startIcon={<CrossIcon />}>
    Button with icons
  </Button>
)

stories.add('Default', Default)
stories.add('WithIcons', WithIcons)

export default Button
