import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modals from './Modals';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <Modals />
    </BrowserRouter>
  </React.StrictMode>);

  const linkElement = screen.getByText(/Masukkan Harga Tawarmu/i);
  expect(linkElement).toBeInTheDocument();

});