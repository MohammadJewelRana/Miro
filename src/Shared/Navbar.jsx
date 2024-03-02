import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {

  const {name }=useContext(AuthContext)
  console.log(name);
    return (
        <div className='h-24 w-full'>
          header  


        </div>
    );
};

export default Navbar;