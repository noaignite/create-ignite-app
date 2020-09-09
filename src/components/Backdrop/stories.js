import * as React from 'react'
import Backdrop from './Backdrop'

export default {
  title: 'Components/Backdrop',
  component: Backdrop,
}

const Template = (args) => <Backdrop {...args} />

export const Default = Template.bind({})
Default.args = {
  invisible: false,
  open: false,
}
