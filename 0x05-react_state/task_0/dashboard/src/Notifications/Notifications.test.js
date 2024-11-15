import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  const mockHandleDisplayDrawer = jest.fn();
  const mockHandleHideDrawer = jest.fn();

  it('should call handleDisplayDrawer when "Your notifications" is clicked', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={false}
        handleDisplayDrawer={mockHandleDisplayDrawer}
        handleHideDrawer={mockHandleHideDrawer}
      />
    );
    wrapper.find('div').first().simulate('click');
    expect(mockHandleDisplayDrawer).toHaveBeenCalled();
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        handleDisplayDrawer={mockHandleDisplayDrawer}
        handleHideDrawer={mockHandleHideDrawer}
      />
    );
    wrapper.find('button').simulate('click');
    expect(mockHandleHideDrawer).toHaveBeenCalled();
  });
});

