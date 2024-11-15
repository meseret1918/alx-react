import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('should log in and update state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@example.com', 'password123');
    expect(wrapper.state('user')).toEqual({
      email: 'test@example.com',
      password: 'password123',
      isLoggedIn: true,
    });
  });

  it('should log out and reset state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({
      email: '',
      password: '',
      isLoggedIn: false,
    });
  });
});

