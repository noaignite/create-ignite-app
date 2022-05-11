import * as React from 'react'
import AppBase from './AppBase'

export default {
  title: 'Layouts/AppBase',
  component: AppBase,
}

const Template = (args) => <AppBase {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>[this.props.children]</div>,
}
