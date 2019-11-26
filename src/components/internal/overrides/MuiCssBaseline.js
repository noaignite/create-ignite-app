const styles = {
  '@global': {
    '@font-face': [
      // Include font files here:
      // {
      //   fontFamily: 'SuisseIntl',
      //   fontWeight: 400,
      //   fontDisplay: 'swap',
      //   src: `
      //     url("/public/fonts/SuisseIntl-Regular.woff2')}") format("woff2"),
      //     url("/public/fonts/SuisseIntl-Regular.woff") format("woff")
      //   `,
      // },
    ],
    // Opinionated defaults taken from sanitize.css
    // https://github.com/csstools/sanitize.css
    'iframe, img, input, select, textarea': {
      height: 'auto',
      maxWidth: '100%',
    },
    'ol ol, ol ul, ul ol, ul ul': {
      margin: 0,
    },
    'nav ol, nav ul': {
      listStyle: 'none',
      padding: 0,
    },
    'svg:not([fill])': {
      fill: 'currentColor',
    },
  },
}

export default styles
