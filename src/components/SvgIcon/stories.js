import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import SvgIcon from './SvgIcon'

export default {
  title: 'Components/SvgIcon',
  component: SvgIcon,
  argTypes: {
    color: storySelectArgType(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),
    fontSize: storySelectArgType(['default', 'inherit', 'small', 'large']),
  },
}

const Template = (args) => <SvgIcon {...args} />

export const Default = Template.bind({})
Default.args = {
  children: (
    <path d="M13,12,19.536,5.46a.65.65,0,0,0-.92-.918l-6.54,6.541L5.393,4.4a.65.65,0,0,0-1.076.664.635.635,0,0,0,.157.256L18.616,19.46a.65.65,0,0,0,.92-.918Zm-2.78.939L4.474,18.682a.649.649,0,0,0,.919.918h0l5.742-5.742a.65.65,0,0,0-.92-.918Z" />
  ),
  color: 'inherit',
  fontSize: 'default',
}
