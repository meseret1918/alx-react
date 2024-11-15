import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';
import { AppContext } from '../App/AppContext';

describe('<Footer />', () => {
  test('does not display the contact link when the user is logged out', () => {
    const contextValue = { user: { isLoggedIn: false } };
    const { queryByText } = render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(queryByText('Contact us')).toBeNull();
  });

  test('displays the contact link when the user is logged in', () => {
    const contextValue = { user: { isLoggedIn: true } };
    const { getByText } = render(
      <AppContext.Provider value={contextValue}>
        <Footer />
      </AppContext.Provider>
    );
    expect(getByText('Contact us')).toBeInTheDocument();
  });
});

