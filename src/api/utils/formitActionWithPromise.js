import sleep from './sleep'

export default function formitActionWithPromise(eventName) {
  return async (values, { setSubmitting }) => {
    setSubmitting(true)
    await sleep(500)
    setSubmitting(false)

    return console.log(eventName, values) // eslint-disable-line no-console
  }
}
