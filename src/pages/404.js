import * as React from 'react'
import Head from 'next/head'
import { SITE_NAME } from '~/utils/constants'
import { useI18n } from '~/contexts'
import ErrorBlock from '~/blocks/ErrorBlock'

function NotFoundPage() {
  const { t } = useI18n()

  return (
    <React.Fragment>
      <Head>
        <title>{`404 | ${SITE_NAME}`}</title>
      </Head>

      <ErrorBlock
        subheading="404"
        heading={t(__translationGroup)`Page not found`}
        text={t(
          __translationGroup,
        )`The page you are looking for might have been renamed, removed or might never have existed.`}
        ctaLabel={t(__translationGroup)`Back to homepage`}
        ctaUrl="/"
      />
    </React.Fragment>
  )
}

export default NotFoundPage
