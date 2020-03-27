import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Section from './Section'

const stories = storiesOf('Components/Section', module)

export const Default = () => (
  <Section
    disableSpacing={boolean('disableSpacing', false)}
    spacingRule={select('spacingRule', ['padding', 'margin'], 'margin')}
  >
    <div style={{ background: '#eee' }}>Section content</div>
  </Section>
)

stories.add('Default', Default)

export default Section
