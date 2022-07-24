import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DescriptionProduct from './DescriptionProduct';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <DescriptionProduct />
    </BrowserRouter>
  </React.StrictMode>);

  const linkElement = screen.getByText(/Deskripsi/i);
  expect(linkElement).toBeInTheDocument();
  
});
