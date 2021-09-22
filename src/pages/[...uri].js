import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { SITE_NAME } from 'utils/constants'
import { createRenderBlock, useHeaderColor } from 'utils'
import * as blockVariants from 'blocks'

const renderBlock = createRenderBlock(blockVariants)

function Page() {
  useHeaderColor(pages.Content.headerColor)

  return (
    <>
      <Head>
        <title>Page | {SITE_NAME}</title>
      </Head>

      {pages.Content.children.map(renderBlock)}
    </>
  )
}

export default Page
