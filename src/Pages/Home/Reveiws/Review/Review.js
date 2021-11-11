import { Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { name, img, title, rating, description } = review;

    return (
        <Paper sx={{ textAlign: 'center' }} elevation={0}>
            <img style={{ width: '50px', borderRadius: '25px' }} src={img} alt="" />
            <h2>{name}</h2>
            <Typography variant="caption" display="block" gutterBottom>
                {title}
            </Typography>
            <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
            <Typography variant="caption" display="block" gutterBottom>
                Review {rating} stars
            </Typography>
            <p>{description}</p>
        </Paper>
    );
};

export default Review;