// task_0/dashboard/src/App/App.js

import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    // Initializing local state for displayDrawer
    this.state = {
      displayDrawer: false,
    };
  }

  // Function to show the notifications drawer
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  // Function to hide the notifications drawer
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  render() {
    return (
      <div className="App">
        <Notifications 
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
      </div>
    );
  }
}

export default App;

