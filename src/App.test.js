import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Custom Toggle Hook text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Custom Toggle Hook/i);
  expect(linkElement).toBeInTheDocument();
});
