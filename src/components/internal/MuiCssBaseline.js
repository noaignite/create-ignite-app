const overrides = {
  styleOverrides: (theme) => ({
    // Include font files here.
    '@font-face': [
      // {
      //   fontFamily: 'Family',
      //   fontWeight: 400,
      //   fontDisplay: 'swap',
      //   src: `
      //     url("/fonts/family/family-regular.woff2") format("woff2"),
      //     url("/fonts/family/family-regular.woff") format("woff")
      //   `,
      // },
    ],
    // Define :root css variables.
    ':root': {
      '--coa-theme-spacing': theme.spacing(1),
      '--coa-section-spacing': theme.spacing(4),
      '--coa-container-spacing': theme.spacing(2),
      '--coa-toolbar-dense-min-height': '48px',
      '--coa-toolbar-min-height': '56px',
      '--coa-toolbar-spacing': theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        '--coa-section-spacing': theme.spacing(6),
        '--coa-container-spacing': theme.spacing(4),
      },
    },
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
    // Custom global css
    '[type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration': {
      WebkitAppearance: 'none',
      appearance: 'none',
    },
    '[id]': {
      scrollMarginTop: 'var(--coa-sticky-top, 0px)',
    },
  }),
}

export default overrides
