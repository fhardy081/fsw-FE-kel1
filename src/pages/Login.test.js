import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import Login from './Login';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <Provider store={store}>
      <Login />
    </Provider>
  </React.StrictMode>);
  const linkElement = screen.getByText(/masuk/i);
  expect(linkElement).toBeInTheDocument(2);
});
