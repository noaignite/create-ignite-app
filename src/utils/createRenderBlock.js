import * as React from 'react'

export default function createRenderBlock(variants) {
  function renderBlock({ name, props }, key) {
    const { children: childrenProp, ...other } = props

    const Component = variants[name]
    const children = childrenProp ? childrenProp.map(renderBlock) : undefined

    if (!Component) {
      console.error(`COA: Could not render block. Block not found: ${name}`)

      return null
    }

    return (
      <Component key={key} renderIndex={key} {...other}>
        {children}
      </Component>
    )
  }

  return renderBlock
}
