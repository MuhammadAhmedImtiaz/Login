import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { LiaGooglePlus } from "react-icons/lia";
import { GrLinkedinOption } from "react-icons/gr";

const Login = () => {
  return (
    <div className='flex'>
        <div className='w-/2'>
        <h1>Sign in</h1>
        <div>
            <LiaFacebookF />
            <LiaGooglePlus/>
            <GrLinkedinOption />
            <p>or use your account</p>
        </div>
        <form >
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password'/>
        </form>
        <p>Forgot Password</p>
        <div>
            <button>SIGN IN</button>
        </div>
        <div className='w-1/2'>
        <h1>Hello, Friend!</h1>
        <p>Enter your personal details and start journey with us</p>
        <div>
          <button>Sign Up</button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Login