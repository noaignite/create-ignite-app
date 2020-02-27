import React from 'react'
import Head from 'next/head'
import { Default as ContentStory } from 'blocks/Content/stories'

const Page = () => {
  return (
    <>
      <Head>
        <title>Page | Create Oakwood App</title>
      </Head>
      <ContentStory />
    </>
  )
}

export default Page
