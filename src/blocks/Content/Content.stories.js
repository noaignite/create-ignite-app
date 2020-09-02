import * as React from 'react'
import { blocks } from 'api/mock'
import Content from './Content'

export default {
  title: 'Blocks/Content',
  component: Content,
}

const Template = (args) => <Content {...args} />

export const Default = Template.bind({})
Default.args = blocks.Content
