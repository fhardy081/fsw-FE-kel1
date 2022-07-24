import { render, screen } from '@testing-library/react';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import api from '../lib/api';
import store from '../store/store';
import Homepage from './Homepage';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Homepage api={api}/>
        <Navbar />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);

  const linkElement = screen.getByText(/Jual/i);
  expect(linkElement).toBeInTheDocument();
  
});
