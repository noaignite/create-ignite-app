import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean } from '@storybook/addon-knobs'
import MenuItem from './MenuItem'

const stories = storiesOf('Components/MenuItem', module)

export const Default = () => (
  <MenuItem
    component="button"
    dense={boolean('dense', false)}
    disabled={boolean('disabled', false)}
    disableGutters={boolean('disableGutters', false)}
    selected={boolean('selected', false)}
  >
    A menu item
  </MenuItem>
)

stories.add('Default', Default)

export default MenuItem
