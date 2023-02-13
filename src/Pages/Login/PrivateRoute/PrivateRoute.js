import { CircularProgress, LinearProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Navigate, useLocation } from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    const location = useLocation();

    if (isLoading) {
        return <Box style={{ textAlign: 'center' }}>
            <LinearProgress style={{ margin: '10px' }} color="secondary" />
            <CircularProgress style={{ margin: '15%' }} color="success" />
        </Box>

    }
    if (user?.email) {
        return children;
    }

    if(!user?.email){
        return <Navigate to="/login" state={{ from: location }} />;
    }
};

export default PrivateRoute;