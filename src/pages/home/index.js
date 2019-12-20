import React from 'react'
import Head from 'next/head'
import MetaData from 'containers/MetaData'
import { Default as WysiwygStory } from 'blocks/Wysiwyg/stories'

const Home = () => {
  const title = 'Create Oakwood App - Home'
  return (
    <>
      <Head>
        <title>{title}</title>
        <MetaData title={title} />
      </Head>
      <WysiwygStory />
    </>
  )
}

export default Home
