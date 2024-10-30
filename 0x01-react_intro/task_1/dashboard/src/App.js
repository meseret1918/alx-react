import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import Notifications from './Notifications';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Dashboard</h1>
      </header>
      <Notifications />
      <p>Login to access the full dashboard</p>
      <footer>
        <p>{getFooterCopy(false)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

