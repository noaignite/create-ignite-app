import * as React from 'react'
import Head from 'next/head'
import { t } from '@lingui/macro'
import { SITE_NAME } from '~/utils/constants'
import ErrorBlock from '~/blocks/ErrorBlock'

function NotFoundPage() {
  return (
    <React.Fragment>
      <Head>
        <title>{`404 | ${SITE_NAME}`}</title>
      </Head>

      <ErrorBlock
        subheading="404"
        heading={t`Page not found`}
        text={t`The page you are looking for might have been renamed, removed or might never have existed.`}
        ctaLabel={t`Back to homepage`}
        ctaUrl="/"
      />
    </React.Fragment>
  )
}

export default NotFoundPage
