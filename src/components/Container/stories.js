import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Container from './Container'

const stories = storiesOf('Components/Container', module)

export const Default = () => (
  <Container
    maxWidth={select('maxWidth', ['xs', 'sm', 'md', 'lg', 'xl', false], false)}
    fixed={boolean('fixed', false)}
  >
    {Array.from(new Array(6), (_, idx) => (
      <p key={idx} style={{ marginTop: 0 }}>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
        egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent
        commodo cursus magna, vel scelerisque nisl consectetur et.
      </p>
    ))}
  </Container>
)

stories.add('Default', Default)

export default Container
