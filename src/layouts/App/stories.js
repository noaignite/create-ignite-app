import * as React from 'react'
import App from './App'

export default {
  title: 'Layouts/App',
  component: App,
}

export const Default = {
  args: {
    children: <div>[this.props.children]</div>,
  },
}
