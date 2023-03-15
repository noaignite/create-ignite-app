import * as React from 'react'
import App from './App'

export default {
  component: App,
}

export const Default = {
  args: {
    children: <div>[this.props.children]</div>,
  },
}
