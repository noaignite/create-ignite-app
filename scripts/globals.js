/* eslint-disable global-require, no-console */
if (typeof window !== 'undefined') {
  const smoothscroll = require('smoothscroll-polyfill')
  smoothscroll.polyfill()
}

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const { defaultTheme } = require('~/components')
  console.log(
    `%c
 ██████╗██╗ █████╗
██╔════╝██║██╔══██╗
██║     ██║███████║
██║     ██║██╔══██║
╚██████╗██║██║  ██║
 ╚═════╝╚═╝╚═╝  ╚═╝

Tip: you can access the \`theme\` object directly in the console.
  `,
    `font-family:monospace;font-size:12px;color:${defaultTheme.palette.primary.main}`,
  )
  window.parent.window.theme = defaultTheme
  window.theme = defaultTheme
}
