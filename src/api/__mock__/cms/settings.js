function composeLinks(length) {
  return Array.from(new Array(length), (_, idx) => ({
    label: `Link ${idx + 1}`,
    url: `/link-${idx + 1}`,
  }))
}

const menuPrimary = [
  {
    label: 'Brands',
    url: '/brands',
  },
  {
    label: 'New arrivals',
    url: '/new-arrivals',
  },
]

const menuSecondary = [
  {
    items: composeLinks(8),
    label: 'Clothing',
    url: '/clothing',
  },
  {
    items: composeLinks(4),
    label: 'Accessories',
    url: '/accessories',
  },
  {
    items: composeLinks(6),
    label: 'Shoes',
    url: '/shoes',
  },
  {
    items: composeLinks(7),
    label: 'Homewear',
    url: '/homewear',
  },
  {
    items: composeLinks(5),
    label: 'Skincare',
    url: '/skincare',
  },
]

const menuFooter = [
  {
    label: 'Work',
    url: '/work',
  },
  {
    label: 'News',
    url: '/news',
  },
  {
    label: 'Press',
    url: '/press',
  },
  {
    label: 'About',
    url: '/about',
  },
]

export default {
  menus: {
    primary: menuPrimary,
    secondary: menuSecondary,
    footer: menuFooter,
  },
  socials: ['instagram', 'youtube', 'facebook', 'pinterest', 'tiktok'].map((id) => ({
    id,
    url: `https://www.${id}.com/iciw`,
  })),
  storeMessage: 'lorem ipsum dolor sit amet',
  privacyPolicyPageUrl: '/privacy-policy',
  termsPageUrl: '/terms-and-conditions',
}
