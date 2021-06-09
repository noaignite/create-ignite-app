import * as React from 'react'
import PropTypes from 'prop-types'
import translations from '../../../public/locales/en.json'

const I18nContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  I18nContext.displayName = 'I18nContext'
}

export function useI18n() {
  return React.useContext(I18nContext)
}

export function I18nProvider(props) {
  const { children } = props

  const t = (keys, ...args) => {
    let string = ''

    if (keys.constructor === Array) {
      // Looks like we got a tagged template, proceed to transform.
      keys.forEach((key, i) => {
        // Find path and index of key.
        const partsWithIndex = key.match(/[^ ]+(\$\d)/g)
        if (partsWithIndex !== null) {
          const partPaths = partsWithIndex.map((part) => part.split('$')[0])
          const indexes = partsWithIndex.map((part) => part.split('$')[1])

          // Get correct translation.
          const trans = partPaths
            .map((path, j) => {
              const full = translations[path] || path
              const match = full.match(new RegExp(`(?:\\$${indexes[j]})([^$ ]+)`))
              return match ? match[1] : ''
            })
            .join(' ')
          string += `${trans || key} ${args[i] || ''} `
        }
      })
    } else {
      // Get the key value.
      string = translations[keys] || args[0]
    }

    return string
  }

  const contextValue = {
    t,
  }

  return <I18nContext.Provider value={contextValue}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default I18nContext
