import blocks from './blocks'

export default {
  Home: {
    headerMode: 'auto',
    children: [
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
    children: [
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
    children: [
      {
        name: 'ErrorBlock',
        props: blocks.ErrorBlock,
      },
    ],
  },
}
