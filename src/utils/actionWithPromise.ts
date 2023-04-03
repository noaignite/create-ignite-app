import { sleep } from '@noaignite/utils'

/**
 * Simulates an async action which resolves after 500ms.
 * After the action is resolved, it logs the event name and the
 * arguments to the console.
 *
 * @param eventName The name of the event to log.
 *
 * @example actionWithPromise('test')('a', 'b') // test — "a" — "b"
 */
export default function actionWithPromise(eventName: string) {
  return async <T>(...args: T[]) => {
    await sleep(500)
    return console.log(eventName, ...args) // eslint-disable-line no-console
  }
}
