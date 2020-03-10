import Router from 'next/router'
import { action } from '@storybook/addon-actions'

function actionWithPromise() {
  action('clicked link')()
  // we need to return promise because it is needed by Link.linkClicked
  return new Promise((resolve, reject) => reject())
}

export const mockedRouter = {
  pageLoader: { prefetched: {} },
  pathname: 'mock-path',
  prefetch: () => new Promise(resolve => resolve()),
  push: actionWithPromise,
  replace: actionWithPromise,
  route: '/mock-route',
}

Router.router = mockedRouter
