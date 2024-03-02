import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import image1 from '../../assets/dynamic/2.png'

const Work = () => {

    const btn=[
        {title:'brainstroming' , path:'/brainstroming'},
        {title:'diagramming' , path:'/brainstroming'},
        {title:'meeting & workspace' , path:'/meeting'},
        {title:'scrum events' , path:'/scrum'},
        {title:'mapping' , path:'/mapping'},
        {title:'Research & design' , path:'/research'},
        {title:'strategic planning' , path:'/strategic'}
 
    ]



    return (
        <div className='my-24 max-w-7xl p-6'>
             <h1 className='text-4xl font-bold mb-10'>Built for the way you work</h1>
           
             <NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white " : "" } > Home </NavLink>

             <div className='flex flex-wrap lg:flex-nowrap items-center justify-center gap-4'>
                {
                    btn.map(item=>
                        <div className=' border text-[12px] md:text-[16px] rounded-l-full rounded-r-full p-3  font-semibold transition-all duration-300 hover:bg-gray-200 cursor-pointer'>
                         <NavLink to={item.path} 
                         className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white " : "" }> 

                         <button className='capitalize'>{item.title}</button>
                         </NavLink>
                        </div>
                        )
                }

                
             </div>




             <div className='mt-12 p-6 flex justify-center gap-8 flex-wrap-reverse md:flex-nowrap'>
                <div>
                    <h1 className='text-xl font-semibold'>Brainstroming</h1>

                    <p className='my-8 max-w-xl opacity-85'>
                    Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on. 
                    </p>

                    <Link>
                        <div className='flex items-center gap-2'>
                            <p className='  text-blue-600 '>Learn more</p>
                           <FaArrowRight className=' text-blue-600 font-thin text-[14px]'></FaArrowRight>
                        </div>
                    </Link>
                </div>
                <div>
                    <img src={image1} alt="" />
                </div>
             </div>


        </div>
    );
};

export default Work;