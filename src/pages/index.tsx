import type { GetStaticPropsContext } from 'next'
import * as blockPropGetters from '~/blocks/getBlockProps'
import { createGetBlocksProps } from '~/utils'
import { pages, settings } from '~/api/__mock__'

export { default } from '~/layouts/Page'

const getBlocksProps = createGetBlocksProps<Block, Page>(blockPropGetters)

export async function getStaticProps(context: GetStaticPropsContext) {
  const page = pages.Home
  const blocksWithData = page?.blocks ? await getBlocksProps(page.blocks, page, context) : []

  return {
    props: {
      headerMode: 'auto',
      defaultLocale: context.defaultLocale,
      locale: context.locale,
      settings,
      page: {
        blocks: blocksWithData,
      },
    },
  }
}
