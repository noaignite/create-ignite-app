import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { SITE_NAME } from '~/utils/constants'
import * as blockVariants from '~/blocks'
import { createRenderBlock } from '~/utils'

const renderBlock = createRenderBlock(blockVariants)

function Page(props) {
  const { blocks, children } = props

  return (
    <React.Fragment>
      <Head>
        <title>Page | {SITE_NAME}</title>
      </Head>

      {children}
      {blocks.map(renderBlock)}
    </React.Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  blocks: PropTypes.array,
}

export default Page
