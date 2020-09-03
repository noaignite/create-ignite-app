import * as React from 'react'
import storySelectArgType from '../utils/storySelectArgType'
import Link from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    color: storySelectArgType([
      'error',
      'inherit',
      'primary',
      'secondary',
      'textPrimary',
      'textSecondary',
    ]),
    display: storySelectArgType(['initial', 'block', 'inline']),
    underline: storySelectArgType(['none', 'hover', 'always']),
    variant: storySelectArgType([
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'subtitle1',
      'subtitle2',
      'body1',
      'body2',
      'caption',
      'button',
      'overline',
      'srOnly',
      'inherit',
    ]),
  },
}

const Template = (args) => <Link {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Just another link',
  color: 'inherit',
  display: 'initial',
  href: 'https://material-ui.com/',
  underline: 'hover',
  variant: 'inherit',
}
