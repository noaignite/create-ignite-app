import * as React from 'react'
import Head from 'next/head'

const SRC_MEDIA_COMPONENTS = ['img', 'video', 'audio', 'iframe']

export default function generatePreload(props) {
  const { component, sources, src } = props

  const mediaType = component === 'img' ? 'image' : component

  return (
    <Head>
      {sources?.map((source) => {
        const media = `(min-width: ${source.min}px) and (max-width: ${source.max}px)`
        return <link key={source.src} rel="preload" as="image" href={source.src} media={media} />
      })}

      {src && SRC_MEDIA_COMPONENTS.includes(mediaType) && (
        <link key={src} rel="preload" as={mediaType} href={src} />
      )}
    </Head>
  )
}
