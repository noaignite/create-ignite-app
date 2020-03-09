import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { number, select } from '@storybook/addon-knobs'
import CircularProgress from './CircularProgress'

const stories = storiesOf('Components/CircularProgress', module)

export const Default = () => (
  <CircularProgress
    color={select('color', ['primary', 'secondary', 'inherit'], 'primary')}
    size={number('size', 40)}
    thickness={number('thickness', 3.6)}
    variant={select('variant', ['determinate', 'indeterminate', 'static'], 'indeterminate')}
  />
)

stories.add('Default', Default)

export default CircularProgress
