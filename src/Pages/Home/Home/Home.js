import React from 'react';
import CarList from '../../../CarList/CarList';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reveiws/Reviews';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Reviews></Reviews>
            <CarList></CarList>
        </div>
    );
};

export default Home;