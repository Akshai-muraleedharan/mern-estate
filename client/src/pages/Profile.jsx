import React from 'react'
import {useSelector} from 'react-redux'
export default function Profile() {

  const {currentUser} = useSelector((state) => state.user)

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl font-semibold my-7'>Profile</h1>

      <form className='flex flex-col gap-4'>
          <img src={currentUser.avatar} className='h-24 w-24 rounded-full cursor-pointer self-center mt-2' alt="Profile"  />
        <input type="text" className='p-3 rounded-lg border' placeholder='username' id='username'/>
        <input type="email" className='p-3 rounded-lg border' placeholder='email' id='email'/>
        <input type="password" className='p-3 rounded-lg border' placeholder='password' id='password'/>
        <button className='p-3 rounded-lg bg-slate-700 text-white uppercase hover:opacity-95 disabled:opacity-85'>Update</button>
      </form>

      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer'>Delete Account</span>
        <span className='text-red-700 cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
