import React from 'react';
import banner from '../../assets/banner/banner2.jpg'

//this is an another extra section that i designed in this project

const Banner2 = () => {
    return (
        <div className=''>
            <div className="relative   bg-cover bg-center h-96 md:h-64 flex items-center justify-center ">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${banner})` }}
                />
                <div className="absolute inset-0 bg-black opacity-50 " />
                <div className="absolute inset-0 flex items-center justify-center flex-col text-white p-12">
                    <p className='text-xl mt-3'>Call to action</p>
                    <p className='font-bold text-4xl my-3 text-center'> Hire Your Next Candidate On Discate </p>
                    <p className='text-xl'>Call Us: +99 698 569 565</p>
                    <button className='bg-white text-black hover:bg-gray-400 hover:text-white px-8 py-2 rounded-md transition-all duration-300 my-8'>Discover More</button>

                </div>
            </div>
        </div>
    );
};

export default Banner2;