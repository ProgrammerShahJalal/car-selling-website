import { Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { name, img, title, rating, description } = review;

    const reviewBg = {
        color: '#C1C1C1',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backgroundBlendMode: 'darken, luminosity'
    }

    return (
        <Paper sx={{ textAlign: 'center' }} style={reviewBg} elevation={0}>
            <img style={{ width: '50px', borderRadius: '25px' }} src={img} alt="" />
            <Typography sx={{ color: 'white' }} variant="h5" display="block" gutterBottom>
                {name}
            </Typography>
            <Typography sx={{ color: 'white' }} variant="caption" display="block" gutterBottom>
                {title}
            </Typography>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            <Typography sx={{ color: 'white' }} variant="caption" display="block" gutterBottom>
                Review {rating} stars
            </Typography>
            <Typography sx={{ color: 'white' }} variant="body1" display="block" gutterBottom>
                {description}
            </Typography>
        </Paper>
    );
};

export default Review;