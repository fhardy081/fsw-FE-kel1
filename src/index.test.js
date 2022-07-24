import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Index from './index';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <Provider store={store}>
      <Index />
    </Provider>
  </React.StrictMode>);
});
