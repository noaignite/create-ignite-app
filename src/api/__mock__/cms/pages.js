import blocks from './blocks'

export default {
  Home: {
    headerMode: 'auto',
    blocks: [
      {
        name: 'Hero',
        props: blocks.Hero,
      },
      {
        name: 'Content',
        props: blocks.Content,
      },
    ],
  },
  Article: {
    blocks: [
      {
        name: 'Media',
        props: blocks.Media,
      },
      {
        name: 'Content',
        props: blocks.Content,
      },
    ],
  },
  NotFound: {
    blocks: [
      {
        name: 'ErrorBlock',
        props: blocks.ErrorBlock,
      },
    ],
  },
}
