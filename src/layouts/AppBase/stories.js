import * as React from 'react'
import AppBase from './AppBase'

export default {
  title: 'Layouts/AppBase',
  component: AppBase,
}

export const Default = {
  args: {
    children: <div>[this.props.children]</div>,
  },
}
