import React from 'react';

// Default user object
export const defaultUser = {
  email: '',
  password: '',
  isLoggedIn: false,
};

// Default logout function
export const defaultLogOut = () => {};

// Create the React context
const AppContext = React.createContext({
  user: defaultUser,
  logOut: defaultLogOut,
});

export default AppContext;

