import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ItemCard2 from './ItemCard2';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <ItemCard2 />
    </BrowserRouter>
  </React.StrictMode>);
  
});
