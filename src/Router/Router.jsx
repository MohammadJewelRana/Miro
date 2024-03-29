import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import HomeLayout from '../Layout/HomeLayout.jsx'
import Home from '../Pages/Home/Home.jsx';
import Login from '../Pages/Login_Reg/Login.jsx';
import Registration from '../Pages/Login_Reg/Registration.jsx';
import LoadingPage from '../Shared/LoadingPage.jsx';

 const router=createBrowserRouter([
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        // errorElement: <LoadingPage></LoadingPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/registration',
                element:<Registration></Registration>
            }
        ]
    }
 ])
export default router;