import React from 'react';
import Header from './layout/Header';
import FeatureProducts from './layout/FeatureProducts';
import LatestProducts from './layout/LatestProducts';
import Offer from './layout/Offer';
import Testimonials from './layout/Testimonials';
import MetaData from './layout/MetaData'; 

const Home = () => {
    return (
        <>
            <MetaData title={'Home'} />
            <Header/>
            <FeatureProducts/>
            {/* <LatestProducts/> */}
            {/* <Offer/> */}
            {/* <Testimonials/>  */}
        </>
    )
}

export default Home
