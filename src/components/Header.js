import { UserButton, useUser } from '@clerk/clerk-react'
import React from 'react'
import { Navigate } from 'react-router-dom';

const Header = () => 
{
  const {  user ,  isSignedIn } = useUser();

  return (
    <div className='p-3 px-8 shadow-md bg-bg-gradient-to-r from-cyan-500 to-blue-500'>
      { 
        isSignedIn ? 
        <div>
          <Navigate to={'/main'}/> 
          <div className='flex items-center justify-between'>
            <h1 className='font-bold text-xl'>AI Customer Support</h1>
            <div className='flex items-center gap-2'>
              <p className='font-bold'>{user.fullName}</p>
              <UserButton/>
            </div>
          </div>
        </div> 
        : <Navigate to={'/login'}/>
      }
    </div>
  )
}

export default Header
