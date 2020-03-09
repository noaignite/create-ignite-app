import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'
import Typography from './Typography'

const stories = storiesOf('Common/Typography', module)

export const Default = () => {
  const TypographyProps = {
    align: select('align', ['inherit', 'left', 'center', 'right', 'justify'], 'inherit'),
    color: select(
      'color',
      ['initial', 'error', 'inherit', 'primary', 'secondary', 'textPrimary', 'textSecondary'],
      'initial',
    ),
    display: select('display', ['initial', 'block', 'inline'], 'initial'),
    gutterBottom: boolean('gutterBottom', false),
    paragraph: boolean('paragraph', false),
    noWrap: boolean('noWrap', false),
  }

  return (
    <>
      <Typography {...TypographyProps} variant="h1">
        h1. Heading
      </Typography>

      <Typography {...TypographyProps} variant="h2">
        h2. Heading
      </Typography>

      <Typography {...TypographyProps} variant="h3">
        h3. Heading
      </Typography>

      <Typography {...TypographyProps} variant="h4">
        h4. Heading
      </Typography>

      <Typography {...TypographyProps} variant="h5">
        h5. Heading
      </Typography>

      <Typography {...TypographyProps} variant="h6">
        h6. Heading
      </Typography>

      <Typography {...TypographyProps} variant="subtitle1">
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography {...TypographyProps} variant="subtitle2">
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
      </Typography>

      <Typography {...TypographyProps} variant="body1">
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography {...TypographyProps} variant="body2">
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur
        unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam
        dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>

      <Typography {...TypographyProps} variant="button">
        Button text
      </Typography>

      <Typography {...TypographyProps} variant="caption">
        Caption text
      </Typography>

      <Typography {...TypographyProps} variant="overline">
        Overline text
      </Typography>
    </>
  )
}

stories.add('Default', Default)

export default Typography
