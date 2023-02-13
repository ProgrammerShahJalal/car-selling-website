import { Alert, AlertTitle, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import CarButton from '../../../StyleComponent/CarButton';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const { user, error, registerUser, isLoading } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, navigate );
        e.preventDefault();
    }
    return (
        <Container sx={{ mt: 8, textAlign: 'center' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name='name'
                            type='text'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-basic"
                            label="Your Email"
                            name='email'
                            type='email'
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Your Password"
                            type="password"
                            name='password'
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            id="standard-password-input"
                            label="Re-type Your Password"
                            type="password"
                            name='password2'
                            onBlur={handleOnBlur}
                            autoComplete="current-password"
                            variant="standard"
                        />
                        <CarButton sx={{ width: '75%', m: 1 }} type='submit' variant="contained">Register</CarButton>
                        <NavLink style={{ textDecoration: 'none' }} to='/login'>
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">
                        <AlertTitle>Congratulations</AlertTitle>
                        User created — <strong>successfully!</strong>
                    </Alert>}
                    {error && <Alert severity="error">
                        <AlertTitle>Something went wrong.</AlertTitle>
                        {error}
                    </Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src="https://i.ibb.co/tq18YyJ/vehicle-5.png" alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;