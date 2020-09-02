import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Section from './Section'

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    spacingRule: storySelectArgType(['padding', 'margin']),
    rhythm: storySelectArgType(['regular', 'dense', false]),
  },
}

const Template = (args) => (
  <Section {...args}>
    <div aria-hidden />
    <div style={{ background: '#ccc' }}>Section content</div>
    <div style={{ background: '#ccc' }}>Section content</div>
    <div style={{ background: '#ccc' }}>Section content</div>
    <div aria-hidden />
  </Section>
)

export const Default = Template.bind({})
Default.args = {
  disableSpacing: false,
  spacingRule: 'margin',
  rhythm: false,
  style: { background: '#eee' },
}
