import Head from 'next/head'
import { createMediaPreload } from '@noaignite/oui'

const generatePreload = createMediaPreload(Head)

const overrides = {
  defaultProps: {
    generatePreload,
  },
}

export default overrides
