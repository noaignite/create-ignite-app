import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { text, select } from '@storybook/addon-knobs'
import Link from './Link'

const stories = storiesOf('Components/Link', module)

export const Default = () => (
  <Link
    href={text('href', 'https://google.com')}
    display={select('display', ['initial', 'block', 'inline'], 'initial')}
    color={select(
      'color',
      ['error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'],
      'inherit',
    )}
    underline={select('underline', ['none', 'hover', 'always'], 'hover')}
    variant={select(
      'variant',
      [
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
      ],
      'inherit',
    )}
  >
    {text('children', 'Just another link')}
  </Link>
)

stories.add('Default', Default)

export default Link
