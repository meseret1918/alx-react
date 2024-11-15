import React, { PureComponent } from 'react';
import { AppContext, defaultUser } from './AppContext';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

class App extends PureComponent {
  state = {
    user: defaultUser,
    listNotifications: [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', value: 'Server error' },
    ],
  };

  logIn = (email, password) => {
    this.setState({ user: { email, password, isLoggedIn: true } });
  };

  logOut = () => {
    this.setState({ user: defaultUser });
  };

  markNotificationAsRead = (id) => {
    this.setState((prevState) => ({
      listNotifications: prevState.listNotifications.filter((n) => n.id !== id),
    }));
  };

  render() {
    const { user, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut }}>
        <Notifications
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        {/* Other components */}
        <Footer />
      </AppContext.Provider>
    );
  }
}

export default App;

