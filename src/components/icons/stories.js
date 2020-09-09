import * as React from 'react'
import * as SvgIcons from '.'

export default {
  title: 'Common/Icons',
}

const Template = (args) => (
  <>
    {Object.entries(SvgIcons).map(([name, SvgIcon]) => (
      <SvgIcon key={name} titleAccess={name} {...args} />
    ))}
  </>
)

export const Default = Template.bind({})
Default.args = {
  style: { margin: 1 },
}
