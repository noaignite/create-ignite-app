async function loadTranslations(locale) {
  const { messages } = await import(`@lingui/loader!../../public/locales/${locale}/messages.po`)

  return messages
}

export default loadTranslations
