import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Backdrop from './Backdrop'

const stories = storiesOf('Components/Backdrop', module)

export const Default = () => (
  <Backdrop invisible={boolean('invisible', false)} open={boolean('open', false)} />
)

stories.add('Default', Default)

export default Backdrop
