import React from 'react'
import { storiesOf } from '@storybook/react'
import Hero from './Hero'

const stories = storiesOf('Blocks/Hero', module)

export const Default = props => (
  <Hero
    backgroundMediaProps={{
      component: 'picture',
      breakpoints: {
        xs: '//source.unsplash.com/360x715',
        sm: '//source.unsplash.com/1440x650',
      },
    }}
    heading1="Lorem ipsum dolor sit"
    heading2="Nullam quis tortor"
    cta={{
      label: 'Discover',
      url: 'https://material-ui.com',
    }}
    {...props}
  />
)

stories.add('Default', Default)

export default Hero
