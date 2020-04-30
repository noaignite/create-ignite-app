export const subMenu = [
  {
    label: 'Sub link1',
    url: '/sub-link1',
  },
  {
    label: 'Sub link2',
    url: '/sub-link2',
  },
  {
    label: 'Sub link3',
    url: '/sub-link3',
  },
  {
    label: 'Sub link4',
    url: '/sub-link4',
  },
  {
    label: 'Sub link5',
    url: '/sub-link5',
  },
  {
    label: 'Sub link6',
    url: '/sub-link6',
  },
]

export const menuPrimary = [
  {
    label: 'Work',
    links: subMenu,
    url: '/work',
  },
  {
    label: 'News',
    links: subMenu,
    url: '/news',
  },
  {
    label: 'Press',
    links: subMenu,
    url: '/press',
  },
  {
    label: 'About',
    links: subMenu,
    url: '/about',
  },
]

export const menuFooter = menuPrimary
