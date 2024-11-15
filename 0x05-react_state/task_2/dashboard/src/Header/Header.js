import React, { Component } from 'react';
import AppContext from '../App/AppContext';

class Header extends Component {
  static contextType = AppContext;

  render() {
    const { user, logOut } = this.context;

    return (
      <header className="App-header">
        <h1>School Dashboard</h1>
        {user.isLoggedIn && (
          <section id="logoutSection">
            Welcome {user.email} (<a href="#" onClick={logOut}>logout</a>)
          </section>
        )}
      </header>
    );
  }
}

export default Header;

