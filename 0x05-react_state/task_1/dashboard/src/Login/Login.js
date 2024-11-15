import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '', // Controlled input for email
      password: '', // Controlled input for password
      isLoggedIn: false, // Login state
      enableSubmit: false, // Button enable state
    };

    // Bind functions to improve performance
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault(); // Prevent page reload
    this.setState({ isLoggedIn: true });
    console.log('Login submitted. User is logged in.');
  }

  handleChangeEmail(event) {
    const email = event.target.value;
    this.setState({ email }, this.checkFormValidity);
  }

  handleChangePassword(event) {
    const password = event.target.value;
    this.setState({ password }, this.checkFormValidity);
  }

  checkFormValidity() {
    const { email, password } = this.state;
    this.setState({ enableSubmit: email !== '' && password !== '' });
  }

  render() {
    const { email, password, enableSubmit } = this.state;

    return (
      <div className="Login">
        <h2>Login</h2>
        <form onSubmit={this.handleLoginSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={this.handleChangePassword}
            />
          </div>
          <input
            type="submit"
            value="Login"
            disabled={!enableSubmit}
          />
        </form>
      </div>
    );
  }
}

export default Login;

