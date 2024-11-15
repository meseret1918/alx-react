import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import AppContext from '../App/AppContext';

describe('Header Component', () => {
  it('should not display logoutSection by default', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(false);
  });

  it('should display logoutSection when user is logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider
        value={{ user: { isLoggedIn: true, email: 'test@example.com' } }}
      >
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').exists()).toBe(true);
  });

  it('should call logOut when logout link is clicked', () => {
    const logOut = jest.fn();
    const wrapper = shallow(
      <AppContext.Provider
        value={{ user: { isLoggedIn: true, email: 'test@example.com' }, logOut }}
      >
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click', { preventDefault: jest.fn() });
    expect(logOut).toHaveBeenCalled();
  });
});

