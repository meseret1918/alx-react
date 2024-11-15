// App.js
import React, { useState } from 'react';
import Notifications from './Notifications/Notifications';
import Footer from './Footer/Footer';
import './App.css';

const App = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New course available' },
    { id: 2, message: 'Maintenance update' },
    { id: 3, message: 'System outage' },
  ]);

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  return (
    <div className="App">
      <Notifications notifications={notifications} markNotificationAsRead={markNotificationAsRead} />
      <Footer />
    </div>
  );
};

export default App;

