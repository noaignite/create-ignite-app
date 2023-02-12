import type { GetStaticPropsContext } from 'next'
import * as blockPropGetters from '~/blocks/getBlockProps'
import { createGetBlocksProps } from '~/utils'
import loadTranslations from '~/api/i18n'
import { pages, settings } from '~/api/__mock__'

export { default } from '~/containers/Page'

const getBlocksProps = createGetBlocksProps<Block, Page>(blockPropGetters)

export async function getStaticProps(context: GetStaticPropsContext) {
  const page = pages.Home
  const blocksWithData = page?.blocks ? await getBlocksProps(page.blocks, page, context) : []

  const i18n = await loadTranslations(context.locale as string)

  return {
    props: {
      headerMode: 'auto',
      i18n,
      defaultLocale: context.defaultLocale,
      locale: context.locale,
      settings,
      page: {
        blocks: blocksWithData,
      },
    },
  }
}
