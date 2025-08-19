import React from 'react'
import Logo_Img from '../assets/Logo_Img.png'
const Navbar = () => {
  return (
    <div className='container flex '>
    <div className=''>
    <img src={Logo_Img} alt="" className='h-20 ' />

    </div>
    <ul className='flex items-center justify-end'>
        <li className='uppercase list-none p-4'>Catalogue</li>
        <li className='uppercase list-none p-4'>Fashion</li>
        <li className='uppercase list-none p-4'>Favourite</li>
        <li className='uppercase list-none p-4'>lifestyle</li>
        <li className='bg-black text-white uppercase '> Sign Up</li>
    </ul>

  
    </div>
  )
}

export default Navbar