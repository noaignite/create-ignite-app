import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Section from './Section'

export default {
  title: 'Components/Section',
  component: Section,
  argTypes: {
    gutters: storySelectArgType(['padding', 'margin', false]),
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
  gutters: false,
  style: { background: '#eee' },
}
