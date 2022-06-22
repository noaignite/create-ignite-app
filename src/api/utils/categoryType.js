import PropTypes from 'prop-types'

const categoryType = PropTypes.shape({
  category: PropTypes.string,
  name: PropTypes.arrayOf(PropTypes.string),
  sortOrder: PropTypes.number,
  uri: PropTypes.string,
})

export default categoryType
