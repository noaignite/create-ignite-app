import Head from 'next/head'
import { createMediaPreload } from '@noaignite/oui'

const overrides = {
  defaultProps: {
    generatePreload: createMediaPreload(Head),
  },
}

export default overrides
