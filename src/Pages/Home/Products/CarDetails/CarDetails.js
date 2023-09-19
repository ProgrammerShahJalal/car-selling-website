import { Container, Grid, Paper, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import useAuth from '../../../../hooks/useAuth';
import { Box } from '@mui/system';

const CarDetails = () => {
    const { user } = useAuth();
    const [carDetails, setCarDetails] = useState({});
    const { buyingId } = useParams();


    const { handleSubmit, register, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        axios.post('https://car-selling-server.onrender.com/addOrders', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully placed your orders!');
                    reset();
                }
            })
    }

    useEffect(() => {
        fetch(`https://car-selling-server.onrender.com/cars/buying/${buyingId}`)
            .then(res => res.json())
            .then(data => setCarDetails(data))
    }, [buyingId])
    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ textAlign: 'center', fontWeight: 600 }} variant="h4" gutterBottom component="div">
                Ahoy! {user.displayName}
            </Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 600 }} variant="h4" gutterBottom component="div">
                Welcome to Purchase Page
            </Typography>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: 'center', minHeight: '100vh' }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={2} sx={{ py: 5 }}>
                        <img style={{ width: '100%' }} src={carDetails.img} alt="" />
                        <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <Typography sx={{ fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                {carDetails.name}
                            </Typography>
                            <Typography sx={{ fontWeight: 600, color: 'secondary.main' }} variant="h6" gutterBottom component="div">
                                ${carDetails.price}
                            </Typography>
                        </Box>
                        <Typography style={{ textAlign: 'justify', padding: '5px 15px' }} variant="body1" display="block" gutterBottom>
                            {carDetails.description}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("name", { required: true })}
                            placeholder="Your Name"
                            defaultValue={user.displayName}
                        />
                        <br />

                        <input
                            style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("email", { required: true })}
                            placeholder="Your Email"
                            defaultValue={user.email}
                        />
                        <br />
                        <input
                            style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("text", { required: true })}
                            placeholder="Order Name"
                            defaultValue={carDetails.name}
                        />
                        <br />
                        <input
                            style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("phone", { required: true })}
                            placeholder="Your Phone"
                        />
                        <br />
                        <input
                            style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("address", { required: true })}
                            placeholder="Your Address"
                        />
                        <br />
                        <textarea
                            style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("description", { required: true })}
                            placeholder="Description"
                        />
                        <br />
                        <input
                            style={{ margin: '10px', padding: '15px 20px' }}
                            {...register("status", { required: true })}
                            defaultValue={carDetails.status} readOnly
                        />
                        <br />
                        {errors.exampleRequired && <span>This field is required</span>}

                        <input style={{ padding: '5px 15px' }} type="submit" />
                    </form>
                </Grid>
            </Grid>
        </Container >
    );
};

export default CarDetails;