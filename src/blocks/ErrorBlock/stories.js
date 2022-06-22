import * as React from 'react'
import { blocks } from '~/api/__mock__'
import ErrorBlock from './ErrorBlock'

export default {
  title: 'Blocks/ErrorBlock',
  component: ErrorBlock,
}

const Template = (args) => <ErrorBlock {...args} />

export const Default = Template.bind({})
Default.args = blocks.ErrorBlock
