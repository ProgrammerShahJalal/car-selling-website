import { Grid } from '@mui/material';
import React from 'react';
import carImg from '../../../images/dashboard.svg';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={4}>
                <h2>SF Car Dashboard</h2>
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                <img style={{ width: '80%' }} src={carImg} alt="" />
            </Grid>

        </Grid>
    );
};

export default DashboardHome;