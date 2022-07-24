import { render, screen, fireEvent } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import api from '../lib/api';
import store from '../store/store';
import InfoOffer from './InfoOffer';

test('renders learn react link', () => {
    render(<React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <InfoOffer api={api} />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>);

});
