import PropTypes from 'prop-types'

const menuLinkShape = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const menuLinkType = PropTypes.shape(menuLinkShape)

menuLinkShape.links = PropTypes.arrayOf(menuLinkType)

export default menuLinkType
