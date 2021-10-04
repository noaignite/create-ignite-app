import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { SITE_NAME } from 'utils/constants'
import { createRenderBlock, useHeaderColor } from 'utils'
import * as blockVariants from 'blocks'

const renderBlock = createRenderBlock(blockVariants)

function Home() {
  useHeaderColor('auto')

  return (
    <>
      <Head>
        <title>Home | {SITE_NAME}</title>
      </Head>

      {pages.Home.children.map(renderBlock)}
    </>
  )
}

export default Home
