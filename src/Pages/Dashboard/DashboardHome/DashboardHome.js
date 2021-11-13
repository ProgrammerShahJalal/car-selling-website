import { Grid, Typography } from '@mui/material';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import carImg from '../../../images/dashboard.svg';

const DashboardHome = () => {
    const { user } = useAuth();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={4}>
                <Typography variant="h4" gutterBottom component="div">
                    Dear <Typography variant="h4" sx={{ color: 'darkblue' }}>{user.displayName}!</Typography> Welcome Back.
                </Typography>

            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <img style={{ width: '80%' }} src={carImg} alt="" />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;