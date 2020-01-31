import React from 'react'
import { storiesOf } from '@storybook/react'
import { Default as AppStory } from 'containers/App/stories'
import { Default as ContentStory } from 'blocks/Content/stories'

const stories = storiesOf('Pages', module)

function addPageStory(name, Page) {
  return stories.add(name, () => (
    <AppStory>
      <Page />
    </AppStory>
  ))
}

addPageStory('Home', () => (
  <>
    <ContentStory />
  </>
))
