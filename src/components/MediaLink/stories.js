import * as React from 'react'
import Media from '@oakwood/oui/Media'
import MediaLink from './MediaLink'

export default {
  title: 'Components/MediaLink',
  component: MediaLink,
}

const Template = (args) => (
  <MediaLink {...args}>
    <Media component="img" src="//source.unsplash.com/600x300" />
  </MediaLink>
)

export const Default = Template.bind({})
Default.args = {
  href: 'https://material-ui.com/',
}
