import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

test('Notifications renders without crashing', () => {
  shallow(<Notifications />);
});

test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li')).toHaveLength(3);
});

test('Notifications renders the correct text', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.contains(<p>Here is the list of notifications</p>)).toBe(true);
});

