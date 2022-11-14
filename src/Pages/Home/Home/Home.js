import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Hero></Hero>
        </div>
    );
};

export default Home;