import { Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useNavigate } from 'react-router';
import CarButton from '../../../../StyleComponent/CarButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Car = ({ car }) => {
    const { _id, name, img, price, description } = car;
    const navigate = useNavigate();

    const handleOrder = id => {
        const uri = `/cars/buying/${_id}`
        navigate(uri);
    }
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <img style={{ width: '100%' }} src={img} alt="" />
                    <Box style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                        <Typography sx={{ fontWeight: 600 }} variant="h5" gutterBottom component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ fontWeight: 600, color: 'secondary.main' }} variant="h6" gutterBottom component="div">
                            ${price}
                        </Typography>
                    </Box>
                    <Typography style={{ textAlign: 'justify', padding: '5px 15px' }} variant="body1" display="block" gutterBottom>
                        {description}
                    </Typography>
                    <CarButton onClick={() => handleOrder(_id)} variant="contained">Buy Car <ShoppingCartOutlinedIcon sx={{ ml: '10px' }} /></CarButton>
                </Paper>
            </Grid>
        </>
    );
};

export default Car;