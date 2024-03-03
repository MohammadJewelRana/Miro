import React, { useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 

const SharedComponant = ({ image, mainText, subText,statePass }) => {

    
    
    return (
        <div className='my-20' >

            <div className={`flex ${statePass ? 'flex-wrap md:flex-nowrap' : 'flex-wrap-reverse md:flex-nowrap'}  items-center justify-center gap-8 md:gap-24  px-6`}>
                
                <div className={` ${statePass && 'order-last'}   `}
                 data-aos="fade-right" 
                 data-aos-duration="600" 
                 data-aos-delay="100" 
                >
                    <h1 className='text-5xl font-bold max-w-xl'> {mainText}</h1>
                    <p className=' opacity-85 max-w-xl my-8'>{subText}</p>

                    <Link>
                        <div className='flex items-center gap-2'>
                            <p className='underline text-blue-600 '>Learn more</p>
                           <FaArrowRight className=' text-blue-600 font-thin text-[14px]'></FaArrowRight>
                        </div>
                    </Link>
                </div>

                <div    >
                    <img src={image} alt="" />
                </div>
            </div>



        </div>
    );
};

export default SharedComponant;