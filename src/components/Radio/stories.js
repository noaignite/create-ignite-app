import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Radio from './Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    color: storySelectArgType(['primary', 'secondary', 'default']),
  },
}

const Template = (args) => <Radio {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  disabled: false,
}
