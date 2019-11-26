import React from 'react'

export default function isUiElement(element, uiNames) {
  return React.isValidElement(element) && uiNames.includes(element.type.uiName)
}
