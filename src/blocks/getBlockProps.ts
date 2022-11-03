// these are all the blocks that require extra data through a getBlockProps function
import type { GetServerSidePropsContext, GetStaticPropsContext } from 'next'

export type GetBlockPropsFunctions<T extends Block, U extends Page> = Record<
  string,
  | ((
      block: T,
      page: U,
      context: GetServerSidePropsContext | GetStaticPropsContext,
    ) => Promise<Record<string, unknown>>)
  | undefined
>

// export your "getBlockProps" functions from each block here
// export { getBlockProps as Hero } from './Hero'
