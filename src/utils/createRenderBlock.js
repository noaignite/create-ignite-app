import * as React from 'react'

export default function createRenderBlock(variants) {
  function renderBlock({ name, props }, key) {
    const { children: childrenProp, ...other } = props

    const Component = variants[name]
    const children = childrenProp ? childrenProp.map(renderBlock) : undefined

    return (
      <Component key={key} renderIndex={key} {...other}>
        {children}
      </Component>
    )
  }

  return renderBlock
}
