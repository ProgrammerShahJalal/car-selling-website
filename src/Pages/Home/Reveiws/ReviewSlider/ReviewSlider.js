import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system';
import Review from '../Review/Review';

const Reviews = (props) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    const reviewsBg = {
        color: '#C1C1C1',
        background: `url("https://i.ibb.co/1sCF4PY/reviewbg.jpg")`,
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundColor: 'rgba(21, 22, 24, 0.9)',
        backgroundBlendMode: 'darken, luminosity'
    }

    return (
        <Box>
            <Container style={reviewsBg} sx={{ py: 5, mt: 5 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography sx={{ color: 'white' }} variant="caption" display="block" gutterBottom>
                        What Our Happy Clients say about us
                    </Typography>
                    <Typography sx={{ fontWeight: 600, color: 'white' }} variant="h4" display="block" gutterBottom>
                        Clients Reviews
                    </Typography>
                    <Carousel>
                        {
                            reviews.map(review => <Review key={review._id} review={review}></Review>)
                        }
                    </Carousel>
                </Box>
            </Container>
        </Box>

    )
}

export default Reviews;
