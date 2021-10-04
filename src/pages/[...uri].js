import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { SITE_NAME } from 'utils/constants'
import { createRenderBlock } from 'utils'
import * as blockVariants from 'blocks'

const renderBlock = createRenderBlock(blockVariants)

function Page() {
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
