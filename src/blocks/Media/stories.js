import * as React from 'react'
import { blocks } from '~/api/__mock__'
import Media from './Media'

export default {
  title: 'Blocks/Media',
  component: Media,
}

const Template = (args) => <Media {...args} />

export const Default = Template.bind({})
Default.args = blocks.Media
