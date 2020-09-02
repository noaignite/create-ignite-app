import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Checkbox from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    color: storySelectArgType(['primary', 'secondary', 'default']),
  },
}

const Template = (args) => <Checkbox {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  color: 'default',
  disabled: false,
}
