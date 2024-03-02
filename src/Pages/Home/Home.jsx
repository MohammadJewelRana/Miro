import React from 'react';
import TrustedUser from './TrustedUser';
import Header from './Header';
import Collaborate from './Collaborate';

const Home = () => {
    return (
        <div className='md:max-w-[80%] mx-auto'>
            
           <Header></Header>

            <TrustedUser></TrustedUser>
            <Collaborate></Collaborate>
            
        </div>
    );
};

export default Home;