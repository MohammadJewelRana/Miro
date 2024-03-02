import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import banner from '../assets/Header/newsletter.png'

const Footer = () => {

    const goTo = [
        { text: 'iPhone', path: '/iPhone' },
        { text: 'Android', path: '/Android' },
        { text: 'Help', path: '/help' },
        { text: 'About', path: '/about' },
        { text: 'Insights', path: '/insights' },
    ]

    return (
        <div className='bg-[#02033B] text-white px-24  py-16 flex   justify-center gap-8 md:gap-24  flex-wrap md:flex-nowrap'>
            {/* left side */}
            <div>
                <div className=' flex justify-between flex-wrap md:flex-nowrap gap-12 '>
                      {/* scan detect part */}
                    <div>
                        <h1 className='text-2xl font-bold mb-12'>Scan.Detect.Remove.</h1>
                        <div className='flex gap-12'>
                            <FaTwitter className='  rounded-md bg-white text-5xl p-2 text-black hover:bg-red-600 hover:transition-all hover:duration-300 cursor-pointer hover:text-white'> </FaTwitter>
                            <FaFacebook className='  rounded-md bg-white text-5xl p-2 text-black hover:bg-red-600 hover:transition-all hover:duration-300 cursor-pointer hover:text-white'></FaFacebook>
                            <FaYoutube className='  rounded-md bg-white text-5xl p-2 text-black hover:bg-red-600 hover:transition-all hover:duration-300 cursor-pointer hover:text-white'></FaYoutube>

                        </div>
                        <div className='my-16 flex gap-8'>
                            <Link className='underline opacity-50 text-[12px]' to=''>Privacy Policy</Link>
                            <Link className='underline opacity-50 text-[12px]' to=''>Terms of Service</Link>
                        </div>
                        <p className='opacity-50 max-w-72'>Copyright © 2022 Certo Software Limited | Registered in England & Wales No. 10072356</p>
                        <p className='opacity-50 my-4'>Designed & developed by  <Link to=''> <span className='underline'>Bigger Picture</span></Link></p>
                    </div>
                     {/* miro part */}
                    <div>
                        <h1 className='text-2xl font-bold'>  Miro.</h1>
                        <div className='border   my-4'></div>
                        <div className='mt-12'>
                            {
                                goTo.map(item =>
                                    <div className='flex gap-4 items-center'>
                                        {/* <div className='border  bg-yellow-600'></div>  */}
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-yellow-500">
                                            <path fillRule="evenodd" d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                                        </svg>

                                        <Link to=''> <p className='text-yellow-500 font-bold my-3'> {item.text}</p></Link>
                                    </div>
                                )
                            }
                        </div>


                    </div>
                </div>
                <p className='opacity-50 mt-12 max-w-2xl '>  Apple, the Apple logo, and iPhone are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Android, Google Play and the Google Play logo are trademarks of Google LLC. </p>
            </div>

            {/* newsletter  */}
            <div className='bg-cover bg-center h-1/3 border  bg-[#FFC247]  rounded-3xl ' style={{ backgroundImage: `url(${banner})` }}>
                <div className='p-2 md:p-8'>
                    <h1 className='text-3xl my-8 font-bold text-black'>Sign up to our newsletter</h1>
                    <p className='max-w-xl font-medium opacity-90 text-xxl text-black'>Receive the latest mobile security news, exclusive discounts & offers straight to your inbox!</p>
                    <div>
                        <div className="flex items-center gap-4 my-12">
                            <input type="email" className="bg-white border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 rounded-l-full h-12" placeholder="Enter your email" />
                            <button className="bg-black text-white px-8 py-2 rounded-r-full -ml-4 h-12 ">Submit</button>
                        </div>


                    </div>
                </div>
            </div>



        </div>
    );
};

export default Footer;