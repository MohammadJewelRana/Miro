import React, { useEffect } from 'react';
import HeaderIMage from '../../assets/Header/header.png'
import HeaderICon1 from '../../assets/Header/svg.png'
import HeaderICon2 from '../../assets/Header/svg (1).png'
import HeaderICon3 from '../../assets/Header/svg (2).png'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { FaArrowRight, FaBeer, FaStar, FaStarHalf } from 'react-icons/fa';

const Header = () => {

    const icons = [HeaderICon1, HeaderICon2, HeaderICon3];
    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <div className='flex justify-center items-center   gap-8 flex-wrap-reverse px-6  md:p-3 md:flex-nowrap   '>
            <div data-aos-delay="100" data-aos-duration='600' data-aos="fade-right" className='lg:w-1/3 '>
                <h1 className='text-4xl font-bold max-w-md ' >Take ideas from better to best</h1>
                <p className='mt-2 mb-6 text-justify lg:max-w-sm'>Miro is your team's visual platform to connect, collaborate, and create — together.  </p>
                <div className='my-4 w-full'>
                    <input type="email" className='px-6 py-3 bg-white border border-gray-400 rounded-l-full rounded-r-full outline-none   rounded-box  mb-4 w-full
                    ' placeholder='Enter your work email ' /><br />




                    <div className="flex ">
                        <div className="flex items-center justify-center gap-2 mx-auto bg-blue-600 px-6 py-3 text-white   text-[12px] rounded-l-full rounded-r-full transition-all duration-300 hover:bg-blue-500 cursor-pointer w-full ">
                            <button className="opacity-100 text-[14px]">Sign up free </button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                    </div>



                    <p className='text-gray-500 mt-2'> Collaborate with your team within minutes</p>
                </div>

                <div className='mt-8 flex items-center gap-12 md:flex-wrap flex-nowrap'>
                    <div>
                        <div className='flex  gap-2'>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStar className='text-yellow-500'></FaStar>
                            <FaStarHalf className='text-yellow-500'></FaStarHalf>
                        </div>
                        <p className='text-[12px] opacity-60 mt-1'>Based on 5149+ reviews</p>
                    </div>
                    <div className='flex gap-4'>
                        {
                            icons.map(item =>
                                <img src={item} alt="" />
                            )
                        }
                    </div>
                </div>
            </div>

            {/* <div     data-aos="fade-left" >
             */}
            <div data-aos="fade-left" data-aos-duration="600" data-aos-delay="100" data-aos-anchor=".example-selector">
                <img className='    ' src={HeaderIMage} alt="" />
            </div>

        </div>

    );
};

export default Header;