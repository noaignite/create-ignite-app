import * as React from 'react'

export default function createRenderBlock(blocks) {
  function renderBlock({ name, props = {} }, idx) {
    const { children: childrenProp, ...other } = props

    if (!name) {
      console.error(`CIA: 🕵️‍♂️ Block with index ${idx} does not have a name`)
      return null
    }

    const Component = blocks[name]
    const children = childrenProp ? childrenProp.map(renderBlock) : undefined

    if (!Component) {
      console.error(`CIA: 🕵️‍♂️ Block not found: ${name}`)
      return null
    }

    return (
      <Component key={idx} renderIndex={idx} {...other}>
        {children}
      </Component>
    )
  }

  return renderBlock
}
