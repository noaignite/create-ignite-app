import * as React from 'react'

type RenderedBlock = Block & { renderIndex?: number }
type Blocks = Record<string, React.ComponentType<RenderedBlock>>

/**
 * Accepts a record of blocks and returns a function that can be used to render
 * one block at a time by a block's `name` property.
 *
 * @example
 * import * as blocks from '~/blocks'
 * const renderBlock = createRenderBlock(blocks)
 */
export default function createRenderBlock(blocks: Blocks) {
  type BlockRenderer = (block: RenderedBlock, index: number) => React.ReactNode

  /**
   * Returns a single render-ready block component from the `createRenderBlock`
   * generated blocks object.
   *
   * @param {object} block The block to render. Must have a `name` property.
   * @param {number} index The index of the block in the array of blocks.
   *
   * @example
   * const block = { name: 'Text', props: { text: 'Hello world' } }
   * const index = 0
   *
   * return <>{renderBlock(block, index)}</>
   */
  const renderBlock: BlockRenderer = ({ name, props = {} }, index) => {
    const { children: childrenProp, ...other } = props

    if (!name) {
      console.error(`CIA: 🕵️‍♂️ Block with index ${index} does not have a name`)
      return null
    }

    const Component = blocks[name]
    const children = childrenProp ? childrenProp.map(renderBlock) : undefined

    if (!Component) {
      console.error(`CIA: 🕵️‍♂️ Block not found: ${name}`)
      return null
    }

    return React.createElement(Component, { key: index, renderIndex: index, ...other }, children)
  }

  return renderBlock
}
