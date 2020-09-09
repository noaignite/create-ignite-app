import * as React from 'react'
import { blocks } from 'api/mock'
import Media from './Media'

export default {
  title: 'Blocks/Media',
  component: Media,
}

const Template = (args) => <Media {...args} />

export const Default = Template.bind({})
Default.args = blocks.Media
