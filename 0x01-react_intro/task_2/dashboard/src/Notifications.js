import React from 'react';
import { getLatestNotification } from './utils';
import './Notifications.css';

function Notifications() {
  const handleClose = () => {
    console.log('Close button has been clicked');
  };

  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button 
        style={{ float: 'right' }} 
        aria-label="Close" 
        onClick={handleClose}
      >
        <img src="close-icon.png" alt="close" />
      </button>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
      </ul>
    </div>
  );
}

export default Notifications;

