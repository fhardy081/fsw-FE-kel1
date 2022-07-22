import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders learn react link', () => {
  render(<Login />);
  const linkElement = screen.getAllByText(/masuk/i);
  expect(linkElement).toHaveLength(2);

});
