import * as React from 'react'
import { styled } from '@mui/system'

export const HtmlRoot = styled('div', {
  name: 'Html',
  slot: 'Root',
})(({ theme }) => ({
  ...theme.typography.body1,
  h1: theme.typography.h3,
  h2: theme.typography.h4,
  h3: theme.typography.h5,
  h4: theme.typography.h6,
  h5: theme.typography.subtitle1,
  h6: theme.typography.overline,
  'h1, h2, h3, h4, h5, h6, ol, ul, p, hr': {
    margin: 'max(16px, 1em) auto max(8px, 0.5em)',
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  'figure, img': {
    margin: '2.8em auto',
    '&:first-child': {
      marginTop: 0,
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
  'figure img': {
    margin: 0,
  },
  img: {
    display: 'block',
    width: '100%',
  },
  figcaption: {
    ...theme.typography.caption,
    margin: theme.spacing(2, 0, 0),
  },
  blockquote: {
    margin: '2.8em auto',
    '& p': theme.typography.h4,
    '& cite': theme.typography.caption,
  },
  'ol, ul': {
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
