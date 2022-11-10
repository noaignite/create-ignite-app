import * as React from 'react'
import { styled } from '@mui/material'

export const HtmlRoot = styled('div')(({ theme }) => ({
  ...theme.typography.body1,
  h1: theme.typography.h3,
  h2: theme.typography.h4,
  h3: theme.typography.h5,
  h4: theme.typography.h6,
  h5: theme.typography.subtitle1,
  h6: theme.typography.overline,
  '& :is(h1, h2, h3, h4, h5, h6, figcaption, p, ol, ul, hr)': {
    margin: 'max(16px, 1em) auto max(8px, 0.5em)',
  },
  '& :is(blockquote, figure, img)': {
    margin: '2.8em auto',
  },
  '& *:not(style):first-child': {
    marginTop: 0,
  },
  '& *:not(style):last-child': {
    marginBottom: 0,
  },
  blockquote: {
    '& p': theme.typography.h4,
    '& cite': theme.typography.caption,
  },
  'figure img': {
    margin: 0,
  },
  img: {
    display: 'block',
    width: '100%',
  },
  figcaption: theme.typography.caption,
  '& :is(ol, ul)': {
    paddingLeft: '1.25em',
  },
  hr: {
    height: 1,
    border: 'none',
    backgroundColor: 'currentColor',
  },
  a: {
    color: 'inherit',
  },
}))

const Html = React.forwardRef(function Html(props, ref) {
  return <HtmlRoot ref={ref} {...props} />
})

export default Html
