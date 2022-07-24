import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ItemCard2 from '../components/ListProduct/ItemCard2';
import Navbar from '../components/Navbar';
import api from '../lib/api';
import store from '../store/store';
import ListProduct3 from './ListProduct3';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ListProduct3 api={api}/>
        <Navbar />
        <ItemCard2 />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);

const button = screen.getByRole('button', {name: 'Edit'})
fireEvent.click(button)
  
});
