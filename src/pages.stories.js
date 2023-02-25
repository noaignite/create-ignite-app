const React = require('react')
const PropTypes = require('prop-types')
const { pages } = require('~/api/__mock__')
const layoutVariants = require('~/layouts')
const Page = require('~/layouts/Page').default

const defaultExport = {
  title: 'Pages',
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

/**
 * Storybook pages
 * Configure your pages by modifying the data at `api/__mock__/cms/pages`.
 */
const pageExports = Object.entries(pages).reduce((acc, [name, props = {}]) => {
  acc[name] = StorybookPage.bind({})
  acc[name].args = {
    ...props,
    blocks: pages[name].blocks,
  }
  return acc
}, {})

module.exports = {
  default: defaultExport,
  ...pageExports,
}
