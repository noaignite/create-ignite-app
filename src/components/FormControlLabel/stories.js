import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Checkbox from '../Checkbox'
import FormControlLabel from './FormControlLabel'

export default {
  title: 'Components/FormControlLabel',
  component: FormControlLabel,
  argTypes: {
    labelPlacement: storySelectArgType(['bottom', 'end', 'start', 'top']),
  },
}

const Template = (args) => <FormControlLabel control={<Checkbox />} {...args} />

export const Default = Template.bind({})
Default.args = {
  checked: false,
  disabled: false,
  label: 'Field label',
  labelPlacement: 'end',
}
