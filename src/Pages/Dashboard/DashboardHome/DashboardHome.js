import { Grid } from '@mui/material';
import React from 'react';

const DashboardHome = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5} md={4}>
                Some Content
            </Grid>
            <Grid item xs={12} sm={7} md={8}>
                Some Extra Content
            </Grid>

        </Grid>
    );
};

export default DashboardHome;