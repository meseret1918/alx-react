import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
  render() {
    const { isLoggedIn } = this.props;
    return (
      <Fragment>
        {isLoggedIn ? <p>Logged In</p> : <p>Please Log In</p>}
      </Fragment>
    );
  }
}

App.defaultProps = {
  isLoggedIn: false,
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

export default App;

