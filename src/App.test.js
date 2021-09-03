import { render, screen } from '@testing-library/react';
import App from './App';

test('renders URL ของคุณ', () => {
  render(<App />);
  const linkElement = screen.getByText(/URL ของคุณ/i);
  expect(linkElement).toBeInTheDocument();
});
