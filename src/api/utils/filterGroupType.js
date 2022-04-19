import PropTypes from 'prop-types'

const dataType = PropTypes.oneOfType([PropTypes.object, PropTypes.string])

const valueType = PropTypes.shape({
  data: dataType.isRequired,
  value: PropTypes.string.isRequired,
})

const filterGroupType = PropTypes.shape({
  field: PropTypes.string.isRequired,
  values: PropTypes.arrayOf(valueType).isRequired,
})

export default filterGroupType
