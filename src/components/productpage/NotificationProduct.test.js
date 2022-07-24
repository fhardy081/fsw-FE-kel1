import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NotificationProduct from './NotificationProduct';

test('renders learn react link', () => {
  render(<React.StrictMode>
    <BrowserRouter>
        <NotificationProduct />
    </BrowserRouter>
  </React.StrictMode>);

  const linkElement = screen.getByText(/Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger./i);
  expect(linkElement).toBeInTheDocument();
  
});