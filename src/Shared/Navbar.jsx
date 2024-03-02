import React, { useContext } from "react";

import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo/svg.png'

const Navbar = () => {



  return (
    <div>


      <div className="navbar  bg-white border-b  fixed z-20 px-4 md:px-8">
        <div className="navbar-start ">

          {/* small device */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">

       
                
              <li className=" ">
                <details className=" ">
                  <summary>Product</summary>
                  <ul className="  w-44  bg-white    ">
                    <li><Link to=''>Product 1 </Link></li>
                    <li><Link to=''>Product 2 </Link></li>
                  </ul>
                </details>
              </li>
              <li className=" ">
                <details className=" ">
                  <summary>Solution</summary>
                  <ul className="  w-44  bg-white    ">
                    <li><Link to=''>Solution 1 </Link></li>
                    <li><Link to=''>Solution 2 </Link></li>
                  </ul>
                </details>
              </li>
              <li className=" ">
                <details className=" ">
                  <summary>Resources</summary>
                  <ul className="  w-44  bg-white    ">
                    <li><Link to=''>Resources 1 </Link></li>
                    <li><Link to=''>Resources 2 </Link></li>
                  </ul>
                </details>
              </li>
 


              <li><Link to=''>Enterprise</Link></li>
              <li><Link to=''>Pricing</Link></li>
              <li><Link to=''>Contact Sales</Link></li>
            </ul>


          </div>



          <Link to='/'><img className="w-14 mb-1  cursor-pointer " src={logo} alt="" /></Link>


          <div className=" bg-white hidden lg:flex">
            {/* large device  */}
            <ul className="menu menu-horizontal px-1 bg-white">

              <li className=" ">
                <details className=" ">
                  <summary>Product</summary>
                  <ul className="  w-44  bg-white border border-blue-300">
                    <li><Link to=''>Product 1 </Link></li>
                    <li><Link to=''>Product 2 </Link></li>
                  </ul>
                </details>
              </li>


              <li className=" ">
                <details className=" ">
                  <summary>Solution</summary>
                  <ul className="  w-44  bg-white border border-blue-300">
                    <li><Link to=''>Solution 1 </Link></li>
                    <li><Link to=''>Solution 2 </Link></li>
                  </ul>
                </details>
              </li>

              <li className=" ">
                <details className=" ">
                  <summary>Resources</summary>
                  <ul className="  w-44  bg-white border border-blue-300">
                    <li><Link to=''>Resources 1 </Link></li>
                    <li><Link to=''>Resources 2 </Link></li>
                  </ul>
                </details>
              </li>

              <li><Link to=''>Enterprise</Link></li>
              <li><Link to=''>Pricing</Link></li>
            </ul>
          </div>

        </div>



        {/* navbar end  */}
        <div className="navbar-end flex gap-4  ">

          <div className="md:flex gap-4 items-center hidden md:block">
            <div className=" hover:text-blue-600 transition-all duration-300 opacity-100 text-[14px] hover:bg-gray-300 hover:p-1 hover:rounded-lg ">
              <Link className="hover:text-blue-600  flex flex-row gap-1 items-center transition-all duration-300  ">
                <p className="">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 opacity-100 text-[14px]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                </svg></p>

                <p className="opacity-100 text-[14px]"> EN</p>
              </Link>
            </div >

            <Link className="hover:text-blue-600 transition-all duration-300 opacity-100 text-[14px] :text-blue-600 transition-all duration-300 opacity-100 text-[14px] hover:bg-gray-300 hover:p-1 hover:rounded-lg">Contact Sales</Link>
          </div>
          <Link to='/login' className="hover:text-blue-600 transition-all duration-300 opacity-100 text-[14px] hover:bg-gray-300 hover:p-1 hover:rounded-lg">Login</Link>


          <Link to='/registration' className="hidden lg:block ">
            <div className="flex">
              <div className="flex items-center gap-2 mx-auto bg-blue-600 py-2 text-white px-3 text--[12px] rounded-l-full rounded-r-full transition-all duration-300 hover:bg-blue-500 cursor-pointer">
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
          </Link>
          <Link to='/registration' className="block lg:hidden">
            <a className="border text-[14px] px-4 py-2 bg-blue-600  text-white transition-all duration-300 hover:bg-blue-500 rounded-lg">SignUp</a>
          </Link>


        </div>



      </div>

    </div>
  );
};

export default Navbar;
