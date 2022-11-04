import type { GetServerSidePropsContext, GetStaticPropsContext } from 'next'
import type { GetBlockPropsFunctions } from '~/blocks/getBlockProps'

export default function createGetBlocksProps<B extends Block, P extends Page>(
  blockPropGetters: GetBlockPropsFunctions<B, P>,
) {
  return async function getBlocksProps(
    blocks: B[],
    page: P,
    context: GetServerSidePropsContext | GetStaticPropsContext,
  ) {
    const blocksPromises = blocks?.map((block) =>
      transformBlock<B, P>(block, page, context, blockPropGetters),
    )

    let blocksWithData = blocks as Block[]
    if (blocksPromises) {
      blocksWithData = await Promise.all(blocksPromises)
    }

    return blocksWithData
  }
}

async function transformBlock<B extends Block, P extends Page>(
  block: B,
  page: P,
  context: GetServerSidePropsContext | GetStaticPropsContext,
  blockPropGetters: GetBlockPropsFunctions<B, P>,
) {
  if (!block.name || !block.props) {
    return block
  }

  const getBlockProps = blockPropGetters[block.name]
  let blockProps = { ...block.props }

  if (getBlockProps) {
    blockProps = await getBlockProps(block, page, context)
  }

  // fetch child block props
  if (block.props.children && block.props.children.length > 0) {
    blockProps.children = await Promise.all(
      block.props.children.map(async (childBlock) =>
        transformBlock(childBlock as B, page, context, blockPropGetters),
      ),
    )
  }

  return {
    name: block.name,
    props: blockProps,
  }
}
