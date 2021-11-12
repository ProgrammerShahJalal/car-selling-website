import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Car from '../Home/Products/Car/Car';

const CarExplore = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch('https://young-garden-14257.herokuapp.com/cars')
            .then(res => res.json())
            .then(data => setCars(data))
    }, [])
    return (
        <Container style={{ textAlign: 'center' }} sx={{ my: 5 }}>
            <Typography sx={{ fontWeight: 600 }} variant="h4" gutterBottom component="div">
                Explore Your Car
            </Typography>
            <Grid container spacing={2}>
                {
                    cars.map(car => <Car key={car.id} car={car}></Car>)
                }
            </Grid>
        </Container>
    );
};

export default CarExplore;