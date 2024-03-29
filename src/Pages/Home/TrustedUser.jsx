import React from 'react';
import TrustedUser1 from '../../assets/trustedUser/Walmart_Index_Only.svg.png'
import TrustedUser2 from '../../assets/trustedUser/cisco.svg.png'
import TrustedUser3 from '../../assets/trustedUser/Volvo_Index_Only.svg.png'
import TrustedUser4 from '../../assets/trustedUser/deloitte.svg.png'
import TrustedUser5 from '../../assets/trustedUser/okta.svg.png'

const TrustedUser = () => {

    const imageArray = [TrustedUser1, TrustedUser2, TrustedUser3, TrustedUser4, TrustedUser5];

    return (
        <div className=' my-24 max-w-7xl mx-auto'>

            <h1 className='text-center text-gray-500 text-[18px] my-4'>Trusted By 45M+ Users</h1>
            <div className='flex items-center justify-around flex-wrap md:flex-nowrap gap-4  px-8 py-4'>
                {
                    imageArray.map(item =>
                   <div className='h-16 w-2/5 md:w-full md:h-auto flex'>
                         <img src={item} className='h-14 mx-auto ' alt="" />
                   </div>
                    )
                }
            </div>


        </div>
    );
};

export default TrustedUser;