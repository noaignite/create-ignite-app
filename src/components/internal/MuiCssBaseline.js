const overrides = {
  styleOverrides: (theme) => `
    /* Include font files here. */
    /*
    @font-face {
      font-family: 'Family';
      font-weight: 400;
      font-display: swap;
      src: url('/fonts/family/family-regular.woff2') format('woff2'),
          url('/fonts/family/family-regular.woff') format('woff');
    }
    */
    /* Define :root css variables. */
    :root {
      --cia-theme-spacing: ${theme.spacing(1)};
      --cia-section-spacing: ${theme.spacing(4)};
      --cia-container-spacing: ${theme.spacing(2)};
      --cia-toolbar-dense-min-height: 48px;
      --cia-toolbar-min-height: 56px;
      --cia-toolbar-spacing: ${theme.spacing(2)};
      ${theme.breakpoints.up('sm')} {
        --cia-section-spacing: ${theme.spacing(6)};
        --cia-container-spacing: ${theme.spacing(4)};
      }
    }
    /* Opinionated defaults taken from sanitize.css */
    /* https://github.com/csstools/sanitize.css */
    iframe, img, input, select, textarea {
      height: auto;
      max-width: 100%;
    }
    ol ol, ol ul, ul ol, ul ul {
      margin: 0;
    }
    nav ol, nav ul {
      list-style: none;
      padding: 0;
    }
    svg:not([fill]) {
      fill: currentColor;
    }
    /* Custom global css */
    [type="search"]::-webkit-search-cancel-button, [type="search"]::-webkit-search-decoration {
      -webkit-appearance: none;
      appearance: none;
    }
    [id] {
      scroll-margin-top: var(--cia-header-height, 0px);
    }
  `,
}

export default overrides
