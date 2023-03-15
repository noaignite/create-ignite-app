import * as React from 'react'
import { Typography } from '@mui/material'

export default {
  component: Typography,
  argTypes: {
    align: {
      control: 'select',
      options: ['inherit', 'left', 'center', 'right', 'justify'],
    },
    color: {
      control: 'select',
      options: [
        'initial',
        'error',
        'inherit',
        'primary',
        'secondary',
        'textPrimary',
        'textSecondary',
      ],
    },
    display: {
      control: 'select',
      options: ['initial', 'block', 'inline'],
    },
  },
}

const Template = (args) => (
  <React.Fragment>
    <Typography {...args} variant="h1">
      h1. Heading
    </Typography>

    <Typography {...args} variant="h2">
      h2. Heading
    </Typography>

    <Typography {...args} variant="h3">
      h3. Heading
    </Typography>

    <Typography {...args} variant="h4">
      h4. Heading
    </Typography>

    <Typography {...args} variant="h5">
      h5. Heading
    </Typography>

    <Typography {...args} variant="h6">
      h6. Heading
    </Typography>

    <Typography {...args} variant="subtitle1">
      subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>

    <Typography {...args} variant="subtitle2">
      subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
    </Typography>

    <Typography {...args} variant="body1">
      body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>

    <Typography {...args} variant="body2">
      body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde
      suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
      dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
    </Typography>

    <Typography {...args} variant="button">
      Button text
    </Typography>

    <Typography {...args} variant="inputText">
      InputText text
    </Typography>

    <Typography {...args} variant="caption">
      Caption text
    </Typography>

    <Typography {...args} variant="overline">
      Overline text
    </Typography>
  </React.Fragment>
)

export const Default = {
  args: {
    align: 'inherit',
    color: 'initial',
    display: 'block',
    gutterBottom: false,
    paragraph: false,
    noWrap: false,
  },
  render: Template,
}
