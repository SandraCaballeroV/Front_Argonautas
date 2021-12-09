import Sidebar from 'components/Sidebar';
import { Outlet } from 'react-router';
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from 'context/auth.context';
import { useMutation } from '@apollo/client';
import { VALIDATE_TOKEN } from 'graphql/usuario/auth/mutations';


const PrivateLayout = () => {

  const {setToken,authToken,setAuthToken}= useAuth();

  const [refreshToken, { data: dataMutation, loading: loadingMutation, error: errorMutation }] =
   useMutation(VALIDATE_TOKEN);

   useEffect(()=>{
    refreshToken();
   },[])
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap h-screen'>
      <Sidebar />
      <div className='flex w-full h-full'>
        <div className='w-full h-full  overflow-y-scroll'>
          <Outlet />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PrivateLayout;
