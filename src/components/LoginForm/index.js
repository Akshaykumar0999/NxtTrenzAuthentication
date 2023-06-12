// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', showSubmitError: false, errorMsg: ''}

  onUpdateUsername = event => {
    this.setState({username: event.target.value})
  }

  onUpdatePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <div className="input-card">
        <label htmlFor="username" className="label-name">
          USERNAME
        </label>
        <input
          type="text"
          value={username}
          id="username"
          className="input"
          onChange={this.onUpdateUsername}
          placeholder="Username"
        />
      </div>
    )
  }

  renderPasswordName = () => {
    const {password, showSubmitError, errorMsg} = this.state
    return (
      <div className="input-card">
        <label htmlFor="password" className="label-name">
          PASSWORD
        </label>
        <input
          type="password"
          value={password}
          id="password"
          className="input"
          onChange={this.onUpdatePassword}
          placeholder="Password"
        />
        {showSubmitError && <p className="error-message">*{errorMsg}</p>}
      </div>
    )
  }

  getSubmitForm = () => {
    const {history} = this.props
    history.replace('/')
  }

  submitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const Url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const Response = await fetch(Url, options)
    const data = await Response.json()
    console.log(data)
    console.log(Response)
    if (Response.ok === true) {
      this.getSubmitForm()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1 className="login-title">Login</h1>
        <div className="login-container">
          <img
            className="website-logo-Mobile"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <img
            className="website-login"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
          <form className="login-form-container" onSubmit={this.submitDetails}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              className="website-logo-Desktop"
              alt="website logo"
            />
            <div className="input-container">{this.renderUsername()}</div>
            <div className="input-container">{this.renderPasswordName()}</div>
            <button className="login-button" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
