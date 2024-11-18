import React from 'react';
import PropTypes from 'prop-types';

class Notifications extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer;
  }

  render() {
    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div className="Notifications">
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="NotificationPanel">
            <button onClick={handleHideDrawer}>Close</button>
            <p>Here are your notifications</p>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func.isRequired,
  handleHideDrawer: PropTypes.func.isRequired,
};

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
