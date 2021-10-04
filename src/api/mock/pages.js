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
        name: 'ArticleSlideshow',
        props: blocks.ArticleSlideshow,
      },
    ],
  },
  Content: {
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
}
