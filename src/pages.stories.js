import * as React from 'react'
import { blocks } from 'api/mock'
import { useHeaderColor } from 'utils'
import App from 'containers/App'
import Content from 'blocks/Content'
import Hero from 'blocks/Hero'
import ProductSlideshow from 'blocks/ProductSlideshow'

export default {
  title: 'Pages',
  component: App,
}

// eslint-disable-next-line react/prop-types
const Template = ({ headerColor, ...args }) => {
  useHeaderColor(headerColor)

  return <App {...args} />
}

export const HomePage = Template.bind({})
HomePage.args = {
  headerColor: 'auto',
  children: (
    <>
      <Hero {...blocks.Hero} backgroundAttachment="sticky" />
      <Hero
        {...blocks.Hero}
        backgroundAttachment="fixed"
        backgroundMediaProps={{
          component: 'img',
          src: '//source.unsplash.com/800x400',
        }}
      />
      <ProductSlideshow {...blocks.ProductSlideshow} />
    </>
  ),
}

export const ContentPage = Template.bind({})
ContentPage.args = {
  children: (
    <>
      <Hero {...blocks.Hero} />
      <Content {...blocks.Content} />
    </>
  ),
}
