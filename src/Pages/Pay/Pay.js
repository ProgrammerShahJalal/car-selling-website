import { Container } from '@mui/material';
import React from 'react';
import paymentImg from '../../images/payment.svg';

const Pay = () => {
    return (
        <Container sx={{ textAlign: 'center' }}>
            <h1>Payment System Coming Soon!</h1>
            <img style={{ width: '50%' }} src={paymentImg} alt="" />
        </Container>
    );
};

export default Pay;