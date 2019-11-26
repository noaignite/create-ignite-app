// based on https://github.com/zeit/next.js/issues/1827#issuecomment-323721221

import Router from 'next/router'
import { action } from '@storybook/addon-actions'

const actionWithPromise = () => {
  action('clicked link')()
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject())
}

export const mockedRouter = {
  push: actionWithPromise,
  replace: actionWithPromise,
  prefetch: () => {},
}

Router.router = mockedRouter
