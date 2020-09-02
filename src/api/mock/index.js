export { default as product } from './product'
export { default as blocks } from './blocks'
export { default as cartItem } from './cartItem'

function generateSubMenu(amount) {
  return Array.from(new Array(amount), (_, idx) => ({
    label: `Sub link ${idx + 1}`,
    url: `/sub-link-${idx + 1}`,
  }))
}

export const menuPrimary = [
  {
    label: 'Work',
    links: generateSubMenu(7),
    mediaSrc: '//source.unsplash.com/300x200',
    url: '/work',
  },
  {
    label: 'News',
    links: generateSubMenu(8),
    mediaSrc: '//source.unsplash.com/300x201',
    url: '/news',
  },
  {
    label: 'Press',
    links: generateSubMenu(4),
    mediaSrc: '//source.unsplash.com/300x202',
    url: '/press',
  },
  {
    label: 'About',
    links: generateSubMenu(5),
    url: '/about',
  },
]

export const menuFooter = menuPrimary
