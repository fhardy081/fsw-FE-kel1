import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import DetailProduct from './DetailProduct';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <DetailProduct />
    </BrowserRouter>
  </React.StrictMode>);

  const linkElement = screen.getByText(/Terbitkan/i);
  expect(linkElement).toBeInTheDocument();
  
});
