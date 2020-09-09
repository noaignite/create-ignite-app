const url = 'https://material-ui.com/'

export const menuPrimary = [
  {
    label: 'Work',
    links: Array.from(new Array(6), (_, idx) => {
      const link = {
        label: `Link ${idx + 1}`,
        url,
      }

      if (idx === 0) {
        link.links = Array.from(new Array(2), (__, idx2) => ({
          label: `Another link ${idx2 + 1}`,
          url,
        }))
      }

      return link
    }),
    mediaSrc: '//source.unsplash.com/300x200',
    url,
  },
  {
    label: 'News',
    mediaSrc: '//source.unsplash.com/300x201',
    url,
  },
  {
    label: 'Press',
    mediaSrc: '//source.unsplash.com/300x202',
    url,
  },
  {
    label: 'About',
    url,
  },
]

export const menuFooter = [
  {
    label: 'Work',
    url,
  },
  {
    label: 'News',
    url,
  },
  {
    label: 'Press',
    url,
  },
  {
    label: 'About',
    url,
  },
]

export default {
  menus: {
    menuPrimary,
    menuFooter,
  },
  settings: {},
}
