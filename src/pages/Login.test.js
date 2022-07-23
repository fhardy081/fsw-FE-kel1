import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import Login from './Login';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Login />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);
  const linkElement = screen.getByText(/Daftar di sini/i);
  expect(linkElement).toBeInTheDocument();
});
