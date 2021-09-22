import getNextConfig from 'next/config'

// Storybook compatible
export default function getConfig() {
  return (
    getNextConfig() || {
      serverRuntimeConfig: {},
      publicRuntimeConfig: {},
    }
  )
}
