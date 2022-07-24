import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import api from '../lib/api';
import store from '../store/store';
import InfoProduct from './InfoProduct';

test('renders learn react link', () => {
    render(<React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <InfoProduct api={api} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>);

    const button = screen.getByRole('button', { name: 'Terbitkan' })
    fireEvent.click(button)

    const button1 = screen.getByRole('button', { name: 'Preview' })
    fireEvent.click(button1)

});
