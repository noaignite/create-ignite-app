import PropTypes from 'prop-types'

const menuItemShape = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const menuItemType = PropTypes.shape(menuItemShape)

// Creates recursive type checking of the property.
menuItemShape.links = PropTypes.arrayOf(menuItemType)

export default menuItemType
