import blocks from './blocks'

export default {
  Home: {
    headerColor: 'auto',
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
