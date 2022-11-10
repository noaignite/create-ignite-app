import * as React from 'react'
import PropTypes from 'prop-types'
import { Button, GlobalStyles, styled, Typography } from '@mui/material'
import { SITE_MAIN_ID } from '~/utils/constants'
import { RouterLink } from '~/containers'

const globalStyles = {
  [`#${SITE_MAIN_ID}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}

const ErrorBlockRoot = styled('section')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 var(--cia-container-spacing)',
  margin: 'var(--cia-section-spacing) 0',
})

const ErrorBlockContainer = styled('div')(({ theme }) => ({
  maxWidth: theme.breakpoints.values.sm,
  textAlign: 'center',
}))

const ErrorBlockHeading = styled('h1')(({ theme }) => ({
  ...theme.typography.h3,
  margin: 0,
  [theme.breakpoints.up('md')]: theme.typography.h1,
}))

function ErrorBlock(props) {
  const { ctaLabel, ctaUrl, heading, subheading, text } = props

  return (
    <ErrorBlockRoot>
      <GlobalStyles styles={globalStyles} />

      <ErrorBlockContainer>
        {subheading && (
          <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
            {subheading}
          </Typography>
        )}

        {heading && <ErrorBlockHeading sx={{ mb: 4 }}>{heading}</ErrorBlockHeading>}

        {text && <Typography sx={{ maxWidth: 430, mx: 'auto', mb: 4 }}>{text}</Typography>}

        {ctaLabel && ctaUrl && (
          <Button component={RouterLink} href={ctaUrl} variant="contained">
            {ctaLabel}
          </Button>
        )}
      </ErrorBlockContainer>
    </ErrorBlockRoot>
  )
}

ErrorBlock.propTypes = {
  ctaLabel: PropTypes.string,
  ctaUrl: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  text: PropTypes.string,
}

export default ErrorBlock
