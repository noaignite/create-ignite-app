import * as React from 'react'
import Head from 'next/head'
import { pages } from 'api/mock'
import { useHeaderColor } from 'utils'
import * as blocks from 'blocks'

function Page() {
  useHeaderColor(pages.Content.headerColor)

  return (
    <>
      <Head>
        <title>Page | Create Oakwood App</title>
      </Head>

      {pages.Content.blocks.map((block, idx) => {
        const Block = blocks[block.name]
        return <Block key={idx} {...block.props} />
      })}
    </>
  )
}

export default Page
