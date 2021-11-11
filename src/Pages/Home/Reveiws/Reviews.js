import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Typography } from '@mui/material'
import Review from './Review/Review';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <Container sx={{ my: 5 }}>
            <Typography sx={{ textAlign: 'center' }} variant="caption" display="block" gutterBottom>
                What Our Happy Clients say about us
            </Typography>
            <Typography sx={{ textAlign: 'center', fontWeight: 600 }} variant="h4" display="block" gutterBottom>
                Clients Reviews
            </Typography>
            <Carousel>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </Carousel>
        </Container>
    )
}

export default Reviews;
