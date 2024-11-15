import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Login />);
  });

  it('should render the Login component without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('should have the submit button disabled by default', () => {
    const submitButton = wrapper.find('input[type="submit"]');
    expect(submitButton.props().disabled).toBe(true);
  });

  it('should enable the submit button when email and password are filled', () => {
    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');
    const submitButton = wrapper.find('input[type="submit"]');

    // Simulate typing in email and password
    emailInput.simulate('change', { target: { value: 'test@example.com' } });
    passwordInput.simulate('change', { target: { value: 'password123' } });

    // Re-fetch the submit button after state update
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(false);
  });

  it('should keep the submit button disabled if one input is empty', () => {
    const emailInput = wrapper.find('#email');
    const passwordInput = wrapper.find('#password');
    const submitButton = wrapper.find('input[type="submit"]');

    // Simulate only email input change
    emailInput.simulate('change', { target: { value: 'test@example.com' } });

    // Re-fetch the submit button after state update
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);

    // Simulate only password input change
    passwordInput.simulate('change', { target: { value: '' } });

    // Re-fetch the submit button after state update
    expect(wrapper.find('input[type="submit"]').props().disabled).toBe(true);
  });

  it('should call handleLoginSubmit on form submit', () => {
    const handleLoginSubmitSpy = jest.spyOn(Login.prototype, 'handleLoginSubmit');
    wrapper = shallow(<Login />);

    // Simulate form submission
    wrapper.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(handleLoginSubmitSpy).toHaveBeenCalled();

    handleLoginSubmitSpy.mockRestore();
  });
});

