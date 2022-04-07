import * as React from 'react'
import Head from 'next/head'
import { pages } from '~/api/__mock__'
import { SITE_NAME } from '~/utils/constants'
import { createRenderBlock } from '~/utils'
import * as blockVariants from '~/blocks'

const renderBlock = createRenderBlock(blockVariants)

function Page() {
  return (
    <React.Fragment>
      <Head>
        <title>Page | {SITE_NAME}</title>
      </Head>

      {pages.Content.children.map(renderBlock)}
    </React.Fragment>
  )
}

export default Page
