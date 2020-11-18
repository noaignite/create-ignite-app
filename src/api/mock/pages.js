import blocks from './blocks'

export default {
  Home: {
    headerColor: 'auto',
    children: [
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
              xs: '//source.unsplash.com/v4e3JI7DDHI/1280x720',
              sm: '//source.unsplash.com/v4e3JI7DDHI/1920x1080',
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
