import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { useHeaderColor } from 'utils'
import Meta from 'containers/Meta'
import * as blocks from 'blocks'

function Home() {
  useHeaderColor(pages.Home.headerColor)

  return (
    <>
      <Head>
        <title>Home | Create Oakwood App</title>
        <Meta title="Home | Create Oakwood App" />
      </Head>

      {pages.Home.blocks.map((block, idx) => {
        const Block = blocks[block.name]
        return <Block key={idx} {...block.props} />
      })}
    </>
  )
}

export default Home
