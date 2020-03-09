import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { select } from '@storybook/addon-knobs'
import SvgIcon from './SvgIcon'

const stories = storiesOf('Components/SvgIcon', module)

export const Default = () => (
  <SvgIcon
    color={select(
      'color',
      ['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'],
      'inherit',
    )}
    fontSize={select('fontSize', ['default', 'inherit', 'small', 'large'], 'default')}
  >
    <path d="M13,12,19.536,5.46a.65.65,0,0,0-.92-.918l-6.54,6.541L5.393,4.4a.65.65,0,0,0-1.076.664.635.635,0,0,0,.157.256L18.616,19.46a.65.65,0,0,0,.92-.918Zm-2.78.939L4.474,18.682a.649.649,0,0,0,.919.918h0l5.742-5.742a.65.65,0,0,0-.92-.918Z" />
  </SvgIcon>
)

stories.add('Default', Default)

export default SvgIcon
