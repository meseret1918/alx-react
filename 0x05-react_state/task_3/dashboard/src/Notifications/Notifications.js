import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Notifications extends PureComponent {
  render() {
    const { listNotifications, markNotificationAsRead } = this.props;

    return (
      <div className="notifications">
        <p>Here is the list of notifications:</p>
        <ul>
          {listNotifications.map((notification) => (
            <li key={notification.id} onClick={() => markNotificationAsRead(notification.id)}>
              {notification.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      type: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  markNotificationAsRead: PropTypes.func.isRequired,
};

export default Notifications;

