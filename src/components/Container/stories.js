import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Container from './Container'

export default {
  title: 'Components/Container',
  component: Container,
  argTypes: {
    maxWidth: storySelectArgType(['xs', 'sm', 'md', 'lg', 'xl', false]),
  },
}

const Template = (args) => (
  <Container {...args}>
    {Array.from(new Array(6), (_, idx) => (
      <p key={idx} style={{ marginTop: 0 }}>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et.
      </p>
    ))}
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  disableGutters: false,
  fixed: false,
  maxWidth: false,
}
