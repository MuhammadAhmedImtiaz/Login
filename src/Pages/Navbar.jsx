import React from 'react'
import Logo_Img from '../assets/Logo_Img.png'
const Navbar = () => {
  return (
    <div className='container flex '>
    <div className=''>
    <img src={Logo_Img} alt="" className='h-20  ' />
    </div>
    <ul className='flex items-center justify-end px-110 font-bold gap-9 ml-10 '>
        <li ><a className='uppercase list-none hover:text-gray-400'href="">Catalogue</a></li>
        <li className='uppercase list-none hover:text-gray-400'>Fashion</li>
        <li className='uppercase list-none hover:text-gray-400'>Favourite</li>
        <li className='uppercase list-none hover:text-gray-400'>lifestyle</li>
        <li className='bg-black text-white uppercase '> Sign Up</li>
    </ul>
    </div>
  )
}

export default Navbar