import * as React from 'react'
import * as SvgIcons from '.'

export default {
  title: 'Common/Icons',
}

// eslint-disable-next-line react/prop-types
const Template = ({ fontSize, margin, ...args }) => (
  <React.Fragment>
    {Object.entries(SvgIcons).map(([name, SvgIcon]) => (
      <SvgIcon key={name} titleAccess={name} style={{ fontSize, margin }} {...args} />
    ))}
  </React.Fragment>
)

export const Default = {
  args: {
    fontSize: 24,
    margin: 0,
  },
  render: Template,
}
