import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('calls logOut and shows alert when Control and H are pressed', () => {
    // Mock the logOut function and the alert
    const mockLogOut = jest.fn();
    const mockAlert = jest.spyOn(window, 'alert').mockImplementation(() => {});

    // Render the component with the mock logOut function
    const wrapper = shallow(<App isLoggedIn={true} logOut={mockLogOut} />);
    
    // Simulate keydown event
    const event = new KeyboardEvent('keydown', { ctrlKey: true, key: 'h' });
    document.dispatchEvent(event);

    // Assertions
    expect(mockLogOut).toHaveBeenCalled();
    expect(mockAlert).toHaveBeenCalledWith('Logging you out');

    // Cleanup
    mockAlert.mockRestore();
  });
});

