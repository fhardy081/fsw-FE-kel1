import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import SecurePage from './SecurePage';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <Provider store={store}>
      <SecurePage api={api} />
    </Provider>
  </React.StrictMode>);
});
