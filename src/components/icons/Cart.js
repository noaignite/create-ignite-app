import * as React from 'react'
import PropTypes from 'prop-types'
import SvgIcon from '../SvgIcon'

const Cart = React.memo(
  React.forwardRef(({ amount, ...other }, ref) => (
    <SvgIcon ref={ref} {...other}>
      {amount && (
        <defs>
          <mask id={`svg-cart-amount-mask-${amount}}`}>
            <rect x="0" y="0" width="100%" height="100%" fill="#fff" />
            <text x="21" y="21.5" textAnchor="end" fill="#000" style={{ fontSize: 10 }}>
              {amount}
            </text>
          </mask>
        </defs>
      )}

      <g mask={amount ? `url(#svg-cart-amount-mask-${amount}})` : undefined}>
        <path d="M19.12,6.93a1,1,0,0,0-1-.93h-2V5.81a4.06,4.06,0,0,0-4.15-4,4.06,4.06,0,0,0-4.15,4V6h-2a1,1,0,0,0-1,.93L4.15,20.79a1,1,0,0,0,1,1.21h13.7a1,1,0,0,0,1-1.21Zm-10-1.12A2.76,2.76,0,0,1,12,3.15a2.76,2.76,0,0,1,2.85,2.66V6H9.15ZM5.46,20.7,6.17,7.3H7.85V11h1.3V7.3h5.7V11h1.3V7.3h1.68l.71,13.4Z" />
        {amount && (
          <rect
            x={amount > 9 ? '7' : '12'}
            y="12"
            width={amount > 9 ? '17' : '12'}
            height="12"
            rx="6"
            ry="6"
          />
        )}
      </g>
    </SvgIcon>
  )),
)

Cart.propTypes = {
  amount: PropTypes.number,
}

Cart.uiName = 'SvgIcon'

export default Cart
