import React from 'react'
import { storiesOf } from '@storybook/react'
import { Default as AppStory } from 'containers/App/stories'
import { Default as WysiwygStory } from 'blocks/Wysiwyg/stories'

const stories = storiesOf('Pages', module)

stories.add('Home', () => (
  <AppStory>
    <WysiwygStory />
  </AppStory>
))
