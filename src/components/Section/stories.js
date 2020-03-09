import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import Section from './Section'

const stories = storiesOf('Components/Section', module)

export const Default = () => (
  <Section
    disablePadding={boolean('disablePadding', false)}
    disableSpacing={boolean('disableSpacing', false)}
  >
    <div style={{ background: '#eee' }}>Section content</div>
    <div style={{ background: '#eee' }}>Section content</div>
    <div style={{ background: '#eee' }}>Section content</div>
  </Section>
)

stories.add('Default', Default)

export default Section
