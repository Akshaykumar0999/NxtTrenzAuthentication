// Write your JS code here
import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="headers-icons-container">
      <Link to="/">
        <li className="icon-img-list">
          <img
            className="header-icon-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
          />
        </li>
      </Link>
      <Link to="/products">
        <li className="icon-img-list">
          <img
            className="header-icon-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </li>
      </Link>
      <Link to="/cart">
        <li className="icon-img-list">
          <img
            className="header-icon-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </li>
      </Link>
    </div>
    <div className="details-home-container">
      <div className="details-container">
        <h1 className="heading">Clothes That Get You Noticed</h1>
        <img
          className="product-img-mobile-view"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="description">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="shop-now-btn" type="button">
          Shop Now
        </button>
      </div>
      <img
        className="product-img-desktop-view"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </div>
)

export default Home
