import React from 'react'
import { LiaFacebookF } from "react-icons/lia";
import { LiaGooglePlus } from "react-icons/lia";
import { GrLinkedinOption } from "react-icons/gr";
const Signup = () => {
  return (
    <div>
        <div>
        <h1>Create Account</h1>
        <div>
            <LiaFacebookF />
            <LiaGooglePlus/>
           <GrLinkedinOption />
            <p>create account for registartion</p>
        </div>
        </div>
         <form >
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>
            <input type="password" placeholder="Confirm Password"/>
        </form>
         <div>
            <button>SIGN UP</button>
        </div>
        <div>
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <div>
            <button>Sign In</button>
          </div>
        </div>
    </div>
  )
}

export default Signup