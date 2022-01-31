import { sleep } from '@noaignite/utils'

export default function actionWithPromise(eventName) {
  return async (...args) => {
    await sleep(500)
    return console.log(eventName, ...args) // eslint-disable-line no-console
  }
}
