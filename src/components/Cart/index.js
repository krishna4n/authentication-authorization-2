import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Cart = () => {
  if (Cookie.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <div className="cart-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-img.png"
        alt="cart"
      />
    </div>
  )
}

export default Cart
