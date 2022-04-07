import * as React from 'react'
import Head from 'next/head'
import { pages } from '~/api/__mock__'
import { SITE_NAME } from '~/utils/constants'
import { createRenderBlock } from '~/utils'
import * as blockVariants from '~/blocks'

const renderBlock = createRenderBlock(blockVariants)

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Home | {SITE_NAME}</title>
      </Head>

      {pages.Home.children.map(renderBlock)}
    </React.Fragment>
  )
}

export async function getStaticProps() {
  return {
    props: {
      headerMode: 'auto',
    },
  }
}

export default Home
