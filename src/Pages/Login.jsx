import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { LiaGooglePlus } from "react-icons/lia";
import { GrLinkedinOption } from "react-icons/gr";

const Login = () => {
  return (
    <div className='flex container'>
        <div className='flex w-1/2  flex-col  py-4 h-screen'>
        <h1 className='font-bold text-3xl text-center'>Sign in</h1>
        <div className='flex gap-6  justify-center items-center'>
            <LiaFacebookF className='text-2xl'/>
            <LiaGooglePlus className='text-2xl'/>
            <GrLinkedinOption className='text-2xl' />
            
        </div>
        <p className='text-center'>or use your account</p>
        <form className='flex flex-col  gap-4'>
            <input type="email" placeholder='Email' className='block w-full  bg-gray-300 rounded-md ' />
            <input type="password" placeholder='Password' className='block w-full bg-gray-300 rounded-md hover:border 3px shadow-black-500'/>
        </form>
        <p className='text-center'>Forgot your Password?</p>
        <div className='flex justify-center items-center'>
            <button className='text-white bg-orange-500 rounded px-8 py-2'>SIGN IN</button>
        </div>
        </div>
        <div className='w-1/2 flex bg-orange-500 text-white justify-center items-center flex-col'>
        <h1 className='font-bold text-5xl'>Hello, Friend!</h1>
        <p className='text-1xl'>Enter your personal details and start journey with us</p>
        <div>
          <button className='rounded text-white border-2 w-full flex items-center px-8 py-2'>Sign Up</button>
        </div>
      
    
    </div>
    </div>
  )
}

export default Login