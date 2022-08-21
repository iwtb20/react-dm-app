import React from 'react';
import OrderForm from '../components/OrderForm';
import ScrollToTop from '../components/ScrollToTop';

class OrderFormPage extends React.Component {
    render() {
        return (
            <>
                <ScrollToTop/>
                <OrderForm/>
            </>
        );
    }
}

export default OrderFormPage;
