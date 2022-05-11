const { pages } = require('~/api/__mock__')
const { createRenderBlock } = require('~/utils')
const layoutVariants = require('~/layouts')
const blockVariants = require('~/blocks')

const renderBlock = createRenderBlock(blockVariants)

const defaultExport = {
  title: 'Pages',
  argTypes: {
    headerMode: {
      control: 'select',
      options: ['opaque', 'transparent', 'auto'],
    },
  },
}

/**
 * Storybook pages
 * Configure your pages by modifying the data at `api/__mock__/cms/pages`.
 */
const pageExports = Object.entries(pages).reduce((acc, [name, props = {}]) => {
  const { layout, ...other } = props

  const LayoutComponent = layoutVariants[layout] || layoutVariants.App

  acc[name] = LayoutComponent.bind({})
  acc[name].args = {
    ...other,
    children: pages[name].children.map(renderBlock),
  }
  return acc
}, {})

module.exports = {
  default: defaultExport,
  ...pageExports,
}
