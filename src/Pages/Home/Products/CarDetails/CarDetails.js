import { Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const CarDetails = () => {
    const [carDetails, setCarDetails] = useState({});

    const { buyingId } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/cars/buying/${buyingId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [buyingId])
    return (
        <Container sx={{ my: 5 }}>
            <Typography variant="h4" gutterBottom component="div">
                Welcome to Purchase Page
            </Typography>
            <h2>Your Total Orders: {carDetails.length}</h2>
        </Container>
    );
};

export default CarDetails;