import React from 'react'
import Router from 'next/router'
import Head from 'next/head'

const Page = props => {
  const slug = Router && Router.router && Router.router.query && Router.router.query.slug

  return (
    <>
      <Head>
        <title>Create Oakwood App - Page: {slug}</title>
      </Head>
      <div>Slug: {slug}</div>
    </>
  )
}

export default Page
