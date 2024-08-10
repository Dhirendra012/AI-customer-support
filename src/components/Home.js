import { useUser } from '@clerk/clerk-react';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Home = () => {
  const { isSignedIn } = useUser();

  return (
    <>
      {
        isSignedIn ? <Navigate to={'/main'} /> :
          <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
            <p className='bg-gray-700 rounded-full m-2 py-2 px-4 text-gray-300 text-xl'>Introducing AI-Customer Support</p>
            <div className='flex flex-col items-center'>
              <p className='font-bold text-5xl m-1 p-1 text-gray-800'>Effortlessly Customer Service</p>
              <p className='font-bold text-4xl m-1 p-1 text-gray-800'>With my AI-Customer Support</p>
            </div>
            <p className='text-xl text-white'>Our AI-powered assistant is here to help you with your customer service</p>
            <p className='text-xl text-white'>needs. Get instant answers and personalized support.</p>
            <Link className='m-3 py-3 px-4 font-bold bg-slate-500 rounded-lg text-gray-300' to={"/main"}>CLICK HERE TO START</Link>
          </div>
      }
    </>
  )
}

export default Home
