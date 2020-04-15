import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Section from './Section'

const stories = storiesOf('Components/Section', module)

export const Default = () => (
  <Section
    disableSpacing={boolean('disableSpacing', false)}
    spacingRule={select('spacingRule', ['padding', 'margin'], 'margin')}
    rhythm={select('rhythm', ['regular', 'dense', false], false)}
    style={{ background: '#eee' }}
  >
    <div style={{ background: '#ccc' }}>Section content</div>
    <div style={{ background: '#ccc' }}>Section content</div>
    <div style={{ background: '#ccc' }}>Section content</div>
  </Section>
)

stories.add('Default', Default)

export default Section
