import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { useHeaderColor } from 'utils'
import * as blocks from 'blocks'

function Home() {
  useHeaderColor(pages.Home.headerColor)

  return (
    <>
      <Head>
        <title>Home | Create Oakwood App</title>
      </Head>

      {pages.Home.blocks.map((block, idx) => {
        const Block = blocks[block.name]
        return <Block key={idx} {...block.props} />
      })}
    </>
  )
}

export default Home
