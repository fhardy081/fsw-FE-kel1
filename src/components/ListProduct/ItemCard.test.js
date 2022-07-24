import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemCard from './ItemCard';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <ItemCard />
    </BrowserRouter>
  </React.StrictMode>);
  
});
