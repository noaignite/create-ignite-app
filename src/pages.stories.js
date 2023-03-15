import * as React from 'react'
import PropTypes from 'prop-types'
import { pages } from '~/api/__mock__'
import * as layoutVariants from '~/layouts'
import Page from '~/containers/Page'

export default {
  title: 'Pages',
  component: StorybookPage,
  argTypes: {
    headerColor: {
      control: 'color',
    },
    headerMode: {
      control: 'select',
      options: ['opaque', 'transparent', 'auto'],
    },
  },
}

function StorybookPage(props) {
  const { headerColor, headerMode, layout, ...other } = props

  const LayoutComponent = layoutVariants[layout] || layoutVariants.App

  return (
    <LayoutComponent headerColor={headerColor} headerMode={headerMode}>
      <Page {...other} />
    </LayoutComponent>
  )
}

StorybookPage.propTypes = {
  headerColor: PropTypes.string,
  headerMode: PropTypes.string,
  layout: PropTypes.string,
}

export const Home = {
  args: pages.Home,
}

export const Article = {
  args: pages.Article,
}

export const NotFound = {
  args: pages.NotFound,
}
