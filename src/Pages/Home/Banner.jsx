import React from 'react';
import { Parallax } from 'react-parallax';
import img from '../../assets/banner/banner1.jpg'
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';


//this is an extra section that i designed in this project

const Banner = () => {
    return (
        <div>
            <Parallax bgImage={img} strength={500}>
                <div className='h-96 flex flex-col justify-center items-center '>
                    <div className='bg-gray-200 py-2 w-full'>
                        <h1 className=' text-center text-2xl font-bold    '>Stay connected with us

                            <div className='flex items-center justify-center gap-8'>
                                <FaFacebook className='cursor-pointer hover:text-red-600 transition-all duration-300 '></FaFacebook>
                                <FaTwitter className='cursor-pointer  hover:text-red-600 transition-all duration-300  '></FaTwitter>
                                <FaYoutube className='cursor-pointer  hover:text-red-600 transition-all duration-300 '></FaYoutube>
                            </div>
                        </h1>
                    </div>
                </div>
            </Parallax>

        </div>
    );
};

export default Banner;