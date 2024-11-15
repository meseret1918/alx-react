import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  test('markNotificationAsRead updates state correctly', () => {
    const { getByText, queryByText } = render(<App />);
    expect(getByText('New course available')).toBeInTheDocument();

    const notificationId = 1; // Example notification ID
    fireEvent.click(getByText('New course available'));
    expect(queryByText('New course available')).toBeNull();
  });
});

