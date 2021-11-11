import React from 'react';
import CarList from '../../../CarList/CarList';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <CarList></CarList>
        </div>
    );
};

export default Home;