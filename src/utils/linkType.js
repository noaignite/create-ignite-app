import PropTypes from 'prop-types'

const linkType = PropTypes.shape({
  label: PropTypes.string,
  url: PropTypes.string.isRequired,
})

export default linkType
