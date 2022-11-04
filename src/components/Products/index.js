import Cookie from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Products = () => {
  if (Cookie.get('jwt_token') === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <div className="products-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png "
        alt="products"
      />
    </div>
  )
}

export default Products
