import { Container, Typography } from '@mui/material';
import React from 'react';
import Reviews from '../Home/Reveiws/Reviews';

const Testimonials = () => {
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ textAlign: 'center' }} variant="h4" gutterBottom component="div">
                Your Happiness is Our Commitment <br /> Here is Our Happy Clients Reviews
            </Typography>
            <Reviews></Reviews>
        </Container>
    );
};

export default Testimonials;