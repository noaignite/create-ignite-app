import * as React from 'react'
import { blocks } from '~/api/__mock__'
import ArticleSlideshow from './ArticleSlideshow'

export default {
  title: 'Blocks/ArticleSlideshow',
  component: ArticleSlideshow,
}

const Template = (args) => <ArticleSlideshow {...args} />

export const Default = Template.bind({})
Default.args = blocks.ArticleSlideshow
