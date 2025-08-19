import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { LiaGooglePlus } from "react-icons/lia";
import { GrLinkedinOption } from "react-icons/gr";
const Signup = () => {
  return (
    <div className='container flex'>
        <div className='w-1/2 flex flex-col justify-center items-center h-screen space-y-6'>
        <h1 className='text-3xl font-bold'>Create Account</h1>
        <div className='flex justify center items-center gap-6'>
            <LiaFacebookF className='text-2xl' />
            <LiaGooglePlus className='text-2xl'/>
           <GrLinkedinOption className='text-2xl' />
            
        </div>
        <p>create account for registartion</p>
        
         <form className='flex flex-col gap-4 w-full max-w-md '>
            <input type="text" placeholder="Name" className='  bg-gray-300 hover:border-black ' />
            <input type="email" placeholder="Email"className='bg-gray-300  hover:border-black'/>
            <input type="password" placeholder="Password"className='block bg-gray-300  hover:border-black'/>
            <input type="password" placeholder="Confirm Password" className='bg-gray-300  hover:border-black'/>
        </form>
         <div>
            <button className='text-white bg-orange-500 py-6 px-3 rounded-md flex'>SIGN UP</button>
        </div>
        </div>
        <div className='flex w-1/2 bg-orange-500 text-white justify-centent items-center py-5 flex-col '>
          <h1 className='text-3xl font-bold '>Welcome Back!</h1>
          <p className='text-xl py-5'>To keep connected with us please login with your personal info</p>
          <div>
            <button className='border rounded-md items-center py-5 px-5'>Sign In</button>
          </div>
        </div>
    </div>
  )
}

export default Signup