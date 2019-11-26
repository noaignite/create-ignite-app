import React from 'react'
import { storiesOf } from '@storybook/react'
import * as SvgIcons from '.'

const stories = storiesOf('Common/Icons', module)

export const Default = () => (
  <>
    {Object.entries(SvgIcons).map(([name, SvgIcon]) => (
      <SvgIcon key={name} style={{ margin: 1 }} />
    ))}
  </>
)

stories.add('Default', Default)

export default SvgIcons
