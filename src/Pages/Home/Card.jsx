import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import image1 from "../../assets/dynamic/2.png";
import icon1 from '../../assets/dynamic/Vector.png'
import icon2 from '../../assets/dynamic/Vector (3).png'
import icon3 from '../../assets/dynamic/Vector (1).png'
import icon4 from '../../assets/dynamic/Vector (2).png'
import image2 from '../../assets/dynamic/1.png'

const Card = ({ heading, firstData, data, status }) => {
    const [showData, setShowData] = useState(firstData);

    const handleManage = (e) => {
        // console.log(e);

        const dataFind = data.filter((item) => item.path === e);
        //    console.log(dataFind);
        setShowData(dataFind);
    };

    return (
        <div className="my-12 max-w-7xl p-6">
            <h1 className="text-4xl font-bold mb-10">{heading} </h1>

            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-4">
                {data?.map((item) => (
                    <div
                        className={`     border text-[12px] md:text-[16px] rounded-l-full rounded-r-full p-3  font-semibold transition-all duration-300 hover:bg-gray-200 cursor-pointer`}
                    >
                        <p>
                            <button
                                onClick={() => handleManage(item.path)}
                                className="capitalize"
                            >
                                {item.title}
                            </button>
                        </p>
                    </div>
                ))}
            </div>

            {showData?.map((item) => (
                <>
                    <div className="mt-12 p-6 flex justify-center gap-8 flex-wrap-reverse md:flex-nowrap">
                        <div>
                            <h1 className="text-2xl capitalize font-semibold">
                                {item.title}
                            </h1>

                            <p className="my-8 max-w-xl opacity-85">{item.details}</p>

                           
                            <Link>
                                <div className="flex items-center gap-2">
                                    <p className="  text-blue-600 ">Learn more</p>
                                    <FaArrowRight className=" text-blue-600 font-thin text-[14px]"></FaArrowRight>
                                </div>
                            </Link>

                            {
                                status &&
                                <div className="mt-16">

                                    <p className="opacity-80 text-[20px] mb-4">Integrate your favorite tools</p>
                                    <div className="flex gap-8 h-8 ">

                                        <img src={icon1} alt="" />
                                        <img src={icon2} alt="" />
                                        <img src={icon3} alt="" />
                                        <img src={icon4} alt="" />
                                    </div>

                                </div>
                            }
                        </div>
                        <div>
                            {
                                status ?
                                <img src={image2} alt="" />:   <img src={image1} alt="" />
                                 
                            }
                        
                        </div>


                    </div>

                </>
            ))}


        </div>
    );
};

export default Card;
