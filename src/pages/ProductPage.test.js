import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CarouselProduct from '../components/productpage/CarouselProduct';
import DescriptionProduct from '../components/productpage/DescriptionProduct';
import DetailProduct from '../components/productpage/DetailProduct';
import DetailProductResponsive from '../components/productpage/DetailProductResponsive';
import Modals from '../components/productpage/Modals';
import api from '../lib/api';
import store from '../store/store';
import ProductPage from './ProductPage';

test('renders learn react link', () => {
    render(<React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ProductPage api={api} />
                <Navbar />
                <Modals />
                <DetailProduct />
                <DetailProductResponsive />
                <CarouselProduct />
                <DescriptionProduct />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>);

});
