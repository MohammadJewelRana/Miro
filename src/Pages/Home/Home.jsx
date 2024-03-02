import React from 'react';
import TrustedUser from './TrustedUser';
import Header from './Header';

const Home = () => {
    return (
        <div className='md:max-w-[80%] mx-auto'>
            
           <Header></Header>
            <TrustedUser></TrustedUser>
            
        </div>
    );
};

export default Home;