import React from 'react';
import CarList from '../../../CarList/CarList';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import ReviewSlider from '../Reveiws/ReviewSlider/ReviewSlider';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <ReviewSlider></ReviewSlider>
            <CarList></CarList>
        </div>
    );
};

export default Home;