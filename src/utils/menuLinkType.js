import PropTypes from 'prop-types'

const menuLinkShape = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const menuLinkType = PropTypes.shape(menuLinkShape)

// Creates recursive type checking of the property.
menuLinkShape.links = PropTypes.arrayOf(menuLinkType)

export default menuLinkType
