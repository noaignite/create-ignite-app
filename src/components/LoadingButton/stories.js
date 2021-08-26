import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import LoadingButton from './LoadingButton'

export default {
  title: 'Components/LoadingButton',
  component: LoadingButton,
  argTypes: {
    color: storySelectArgType([
      'inherit',
      'primary',
      'secondary',
      'success',
      'error',
      'info',
      'warning',
    ]),
    loadingPosition: storySelectArgType(['start', 'end', 'center']),
    size: storySelectArgType(['small', 'medium', 'large']),
    variant: storySelectArgType(['text', 'outlined', 'contained']),
  },
}

const Template = (args) => <LoadingButton {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just a button',
  color: 'inherit',
  disabled: false,
  loading: false,
  loadingPosition: 'center',
  size: 'medium',
  variant: 'contained',
}
