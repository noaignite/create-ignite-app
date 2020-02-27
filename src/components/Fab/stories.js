import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import KeyboardArrowRightIcon from '../icons/KeyboardArrowRight'
import Fab from './Fab'

const stories = storiesOf('Components/Fab', module)

export const Default = () => (
  <Fab
    color={select('color', ['default', 'inherit', 'primary', 'secondary'], 'default')}
    size={select('size', ['small', 'medium', 'large'], 'large')}
    variant={select('variant', ['round', 'extended'], 'round')}
    disabled={boolean('disabled', false)}
  >
    <KeyboardArrowRightIcon />
  </Fab>
)

stories.add('Default', Default)

export default Fab
