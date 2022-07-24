import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import CarouselProduct from './CarouselProduct';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <CarouselProduct />
    </BrowserRouter>
  </React.StrictMode>);

  const linkElement = screen.getByRole('button', { current: true });
  expect(linkElement).toBeInTheDocument();
  
});
