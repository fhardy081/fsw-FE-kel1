import { render, screen, userEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../store/store';
import Login from './Login';

test('renders learn react link', () => {
  const email = "santo@gmail.com";
  const password = "12345678";
  const mockLogin = jest.fn();

  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Login onSubmit={mockLogin(email, password)} />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);

  const emailInput = screen.getByLabelText('Email');
  userEvent.type(emailInput, 'santo@gmail.com');
  const passwordInput = screen.getByLabelText('Password');
  userEvent.type(passwordInput, '12345678');
  const loginButton = screen.getByRole('button', { name: /^Masuk$/i });

  userEvent.click(loginButton);

  expect(mockLogin).toHaveBeenCalled();
  expect(mockLogin).toHaveBeenCalledTimes(1);
  expect(mockLogin).toHaveBeenCalledWith("santo@gmail.com", "12345678");

});
