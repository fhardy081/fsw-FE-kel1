import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from '../components/ListProduct/ItemCard';
import api from '../lib/api';
import store from '../store/store';
import ListProduct from './ListProduct';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <ListProduct api={api}/>
        <Navbar />
        <ItemCard />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>);

const button = screen.getByRole('button', {name: 'Edit'})
fireEvent.click(button)
  
});
