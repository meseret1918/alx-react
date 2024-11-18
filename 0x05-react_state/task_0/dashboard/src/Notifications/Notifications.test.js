import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  it('calls handleDisplayDrawer when clicking on menu item', () => {
    const handleDisplayDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={handleDisplayDrawerMock}
        handleHideDrawer={() => {}}
      />
    );
    wrapper.find('.menuItem').simulate('click');
    expect(handleDisplayDrawerMock).toHaveBeenCalled();
  });

  it('calls handleHideDrawer when clicking on close button', () => {
    const handleHideDrawerMock = jest.fn();
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={() => {}}
        handleHideDrawer={handleHideDrawerMock}
      />
    );
    wrapper.find('button').simulate('click');
    expect(handleHideDrawerMock).toHaveBeenCalled();
  });
});
