import React from 'react'
import Logo_Img from '../assets/Logo_Img.png'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className='container flex '>
    <div className='flex w-1/3'>
    <img src={Logo_Img} alt="" className='h-20  ' />
    </div>
    <ul className='flex items-center justify-end px-110 font-bold gap-9 ml-10 w-1/3'>
        <li ><a className='uppercase list-none hover:text-gray-400' href="">Catalogue</a></li>
        <li className='bg-black text-white uppercase px-2 py-2 whitespace-nowrap  '> Sign Up</li>
        <li className='uppercase list-none hover:text-gray-400'>Fashion</li>
        <li className='uppercase list-none hover:text-gray-400'>Favourite</li>
        <li className='uppercase list-none hover:text-gray-400'>lifestyle</li>
        </ul>
        <div className='flex w-1/3 gap-9 py-6 '>
        <a href="https://www.google.com/search?q=facebook+sign+in&oq=&gs_lcrp=EgZjaHJvbWUqGAgAEAAYQhiRAhi0AhjqAhiABBiMBBiKBTIYCAAQABhCGJECGLQCGOoCGIAEGIwEGIoFMhgIARAAGEIYkQIYtAIY6gIYgAQYjAQYigUyGAgCEAAYQhiRAhi0AhjqAhiABBiMBBiKBTIYCAMQABhCGJECGLQCGOoCGIAEGIwEGIoFMhUIBBAuGEMYtAIY6gIYgAQYjAQYigUyFwgFEAAYQhhDGLQCGOoCGIAEGIwEGIoFMgYIBhBFGEDSAQoxMDMxNjNqMGo5qAIGsAIB8QXrUPXWDgrApg&sourceid=chrome&ie=UTF-8"><CiFacebook className='text-5xl' /></a>
        
        <FaInstagram className='text-5xl' />
        <FaTwitter className='text-5xl' />
        </div>
    </div>
  )
}

export default Navbar