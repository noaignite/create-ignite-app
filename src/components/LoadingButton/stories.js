import * as React from 'react'
import { LoadingButton } from '@mui/lab'
import storySelectArgType from 'utils/storySelectArgType'

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
