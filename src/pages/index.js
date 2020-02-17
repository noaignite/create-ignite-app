import React from 'react'
import Head from 'next/head'
import { Default as ContentStory } from 'blocks/Content/stories'
import { Default as HeroStory } from 'blocks/Hero/stories'

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | Create Oakwood App</title>
      </Head>
      <HeroStory />
      <ContentStory />
    </>
  )
}

export default Home
