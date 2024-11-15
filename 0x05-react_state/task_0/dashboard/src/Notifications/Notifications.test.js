// Notifications.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Notifications from './Notifications';
import '@testing-library/jest-dom';

describe('Notifications', () => {
  it('should display the notifications correctly', () => {
    const notifications = [
      { id: 1, message: 'New course available' },
      { id: 2, message: 'Maintenance update' },
    ];
    const { getByText } = render(<Notifications notifications={notifications} markNotificationAsRead={() => {}} />);
    expect(getByText('New course available')).toBeInTheDocument();
    expect(getByText('Maintenance update')).toBeInTheDocument();
  });

  it('should call markNotificationAsRead when a notification is clicked', () => {
    const mockMarkAsRead = jest.fn();
    const notifications = [
      { id: 1, message: 'New course available' },
    ];
    const { getByText } = render(<Notifications notifications={notifications} markNotificationAsRead={mockMarkAsRead} />);
    
    fireEvent.click(getByText('New course available'));
    expect(mockMarkAsRead).toHaveBeenCalledWith(1);
  });
});

