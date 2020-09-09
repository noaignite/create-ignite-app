import blocks from './blocks'

export default {
  Home: {
    headerColor: 'auto',
    blocks: [
      {
        name: 'Hero',
        props: {
          ...blocks.Hero,
          backgroundAttachment: 'sticky',
        },
      },
      {
        name: 'Hero',
        props: {
          ...blocks.Hero,
          backgroundAttachment: 'fixed',
          backgroundMediaProps: {
            component: 'picture',
            breakpoints: {
              xs: '//source.unsplash.com/360x720',
              sm: '//source.unsplash.com/1440x640',
            },
          },
        },
      },
      {
        name: 'ArticleSlideshow',
        props: blocks.ArticleSlideshow,
      },
    ],
  },
  Content: {
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
}
