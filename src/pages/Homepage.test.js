import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
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
  
});
