import * as React from 'react'
import App from './App'

export default {
  title: 'Containers/App',
  component: App,
}

const Template = (args) => <App {...args} />

export const Default = Template.bind({})
Default.args = {
  children: <div>[this.props.children]</div>,
}
