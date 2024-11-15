import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';

describe('<Notifications />', () => {
  const mockMarkNotificationAsRead = jest.fn();
  const mockNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
  ];

  test('calls markNotificationAsRead when a notification is clicked', () => {
    const { getByText } = render(
      <Notifications
        listNotifications={mockNotifications}
        markNotificationAsRead={mockMarkNotificationAsRead}
      />
    );

    fireEvent.click(getByText('New course available'));
    expect(mockMarkNotificationAsRead).toHaveBeenCalledWith(1);
  });
});

