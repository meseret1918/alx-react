import React from 'react';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer, handleDisplayDrawer, handleHideDrawer }) => (
  <div className="Notifications">
    <div onClick={handleDisplayDrawer}>
      Your notifications
    </div>
    {displayDrawer && (
      <div>
        <button onClick={handleHideDrawer}>Close</button>
        <p>Here are your notifications</p>
      </div>
    )}
  </div>
);

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

export default Notifications;

