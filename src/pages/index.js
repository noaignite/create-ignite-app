import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { createRenderBlock, useHeaderColor } from 'utils'
import * as blockVariants from 'blocks'

const renderBlock = createRenderBlock(blockVariants)

function Home() {
  useHeaderColor(pages.Home.headerColor)

  return (
    <>
      <Head>
        <title>Home | Create Oakwood App</title>
      </Head>

      {pages.Home.children.map(renderBlock)}
    </>
  )
}

export default Home
