import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    // Set the default state for displayDrawer
    this.state = {
      displayDrawer: false,
    };
    // Bind the methods
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Change displayDrawer to true
  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  // Change displayDrawer to false
  handleHideDrawer() {
    this.setState({ displayDrawer: false });
  }

  render() {
    const { displayDrawer } = this.state;

    return (
      <div className="App">
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
      </div>
    );
  }
}

export default App;
