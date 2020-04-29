import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { useHeaderColor } from 'utils'
import { Default as AppStory } from 'containers/App/stories'
import { Default as ContentStory } from 'blocks/Content/stories'
import { Default as HeroStory } from 'blocks/Hero/stories'

const stories = storiesOf('Pages', module)

function addPageStory(name, Page) {
  return stories.add(name, () => (
    <AppStory>
      <Page />
    </AppStory>
  ))
}

addPageStory('Home', () => {
  useHeaderColor('auto')

  return (
    <>
      <HeroStory backgroundAttachment="sticky" />
      <HeroStory
        backgroundAttachment="fixed"
        backgroundMediaProps={{
          component: 'img',
          src: '//source.unsplash.com/800x400',
        }}
      />
      <ContentStory />
    </>
  )
})

addPageStory('Content', () => (
  <>
    <HeroStory />
    <ContentStory />
  </>
))
