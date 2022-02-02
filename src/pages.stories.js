const pages = require('api/__mock__').pages
const createRenderBlock = require('utils').createRenderBlock
const blockVariants = require('blocks')
const App = require('containers/App').default

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

// Auto generate pages based on `api/__mock__/pages`.
const commonExports = Object.entries(pages).reduce((acc, [name, props]) => {
  acc[name] = App.bind({})
  acc[name].args = {
    ...props,
    children: pages[name].children.map(renderBlock),
  }
  return acc
}, {})

module.exports = {
  default: defaultExport,
  ...commonExports,
}
