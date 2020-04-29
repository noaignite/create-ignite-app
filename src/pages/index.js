import * as React from 'react'
import Head from 'next/head'
import { useHeaderColor } from 'utils'
import { Default as ContentStory } from 'blocks/Content/stories'
import { Default as HeroStory } from 'blocks/Hero/stories'

const Home = () => {
  useHeaderColor('auto')

  return (
    <>
      <Head>
        <title>Home | Create Oakwood App</title>
      </Head>

      <HeroStory backgroundAttachment="sticky" />
      <HeroStory
        backgroundAttachment="fixed"
        backgroundMediaProps={{
          component: 'img',
          src: '//source.unsplash.com/800x400',
        }}
      />
      <ContentStory />
    </>
  )
}

export default Home
