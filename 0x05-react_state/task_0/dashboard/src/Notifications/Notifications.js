// task_0/dashboard/src/Notifications/Notifications.js

import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) => {
  return (
    <div>
      <button onClick={handleDisplayDrawer}>
        Your notifications
      </button>
      {displayDrawer && (
        <div className="notifications-panel">
          <button onClick={handleHideDrawer}>Close</button>
          <p>Here are your notifications!</p>
        </div>
      )}
    </div>
  );
};

// Define propTypes for the component
Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

// Define defaultProps for the component
Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

export default Notifications;

