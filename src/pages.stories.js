const { pages } = require('~/api/__mock__')
const { createRenderBlock } = require('~/utils')
const blockVariants = require('~/blocks')
const { App } = require('~/containers')

const renderBlock = createRenderBlock(blockVariants)

const defaultExport = {
  title: 'Pages',
  component: App,
  argTypes: {
    headerMode: {
      options: ['opaque', 'transparent', 'auto'],
      control: {
        type: 'select',
      },
    },
  },
}

/**
 * Storybook pages
 * Configure your pages by modifying the data at `api/__mock__/cms/pages`.
 */
const pageExports = Object.entries(pages).reduce((acc, [name, props]) => {
  acc[name] = App.bind({})
  acc[name].args = {
    ...props,
    children: pages[name].children.map(renderBlock),
  }
  return acc
}, {})

module.exports = {
  default: defaultExport,
  ...pageExports,
}
