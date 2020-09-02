import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Media from '@oakwood/oui/Media'
import MediaLink from './MediaLink'

const stories = storiesOf('Components/MediaLink', module)

export const Default = () => (
  <MediaLink href="https://material-ui.com">
    <Media component="img" src="//source.unsplash.com/600x300" />
  </MediaLink>
)

stories.add('Default', Default)

export default MediaLink
