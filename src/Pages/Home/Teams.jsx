import React, { useEffect, useState } from 'react';
import profile1 from '../../assets/team/1.png'
import profile2 from '../../assets/team/2.png'
import profile3 from '../../assets/team/3.png'

const Teams = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('teamData.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    // console.log(data);

    return (
        <div className='my-24 max-w-7xl mx-auto'>


            <h1 className='text-center text-5xl my-8 font-bold px-6'>
                Loved by the world's best teams
            </h1>
            <div className="flex">
                <div className="flex items-center gap-4 mx-auto bg-white py-3 px-8 text-xl rounded-l-full rounded-r-full transition-all duration-300 border border-blue-600 hover:bg-gray-200 cursor-pointer text-blue-600  ">
                    <button> See all customer stories </button>
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

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12   mt-16 px-6'>
                {
                    data.map(item =>
                        <>
                            <div className='flex flex-col justify-between'>
                                <div>
                                    <h1 className='text-5xl font-bold mb-8'>{item.title}</h1>
                                    <p className='opacity-80'>{item.text}</p>

                                </div>
                                <div className='flex items-center  flex-wrap lg::flex-nowrap gap-4   p-2 mt-6  '>
                                <img src={profile2} className='h-12 w-12 ' alt="pic" />
                                    <div className=' opacity-80 flex gap- flex-col '>
                                        <p>{item.name}</p>
                                        <p>{item.designation}</p>
                                    </div>
                                </div>

                            </div>
                        </>
                    )
                }
            </div>

        </div>
    );
};

export default Teams;  