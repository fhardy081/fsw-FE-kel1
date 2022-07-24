import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import api from '../lib/api';
import { removeToken } from '../reducers/api-store';
import store from '../store/store';
import Navbar from './Navbar';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Navbar removeToken={removeToken} api={api} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);

  const button = screen.getByRole('link', { name: 'Masuk' })
  fireEvent.click(button)

});
