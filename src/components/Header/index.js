// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="header-container">
      <img
        className="web-site-logo-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
      />
      <div className="headers-card">
        <ul className="ul-container">
          <Link to="/">
            <li className="headers">Home</li>
          </Link>
          <Link to="/product">
            <li className="headers">Products</li>
          </Link>
          <Link to="/cart">
            <li className="headers">Cart</li>
          </Link>
        </ul>
        <button type="button" className="logout-btn">
          Logout
        </button>
        <button type="button" className="logout-icon-btn">
          <img
            className="logout-icon"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="nav logout"
          />
        </button>
      </div>
    </div>
  </nav>
)

export default Header
