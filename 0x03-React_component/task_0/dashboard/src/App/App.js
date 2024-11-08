import { render } from '@testing-library/react';
import App from './App';

test('renders the expected output', () => {
  const { container } = render(<App />);
  expect(container.textContent).toBe('Please Log In'); // Expecting "Please Log In" by default
});

