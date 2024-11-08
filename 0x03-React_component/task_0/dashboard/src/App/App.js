import React, { Component } from 'react';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return <div>{isLoggedIn ? "Logged In" : "Please Log In"}</div>;
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

export default App;

