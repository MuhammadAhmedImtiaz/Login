import React from 'react'
import Home_Img from '../assets/Home_Img.jpg'
import Background_Img from '../assets/Background_Img.jpg'
const Home = () => {
  return (
    <div className='container flex'>
      <div className='flex flex-col w-1/2'>
      <div className='relative'>
      <img src={Background_Img} className='absolute z-0' alt="" />
      <h1 className='text-3xl font-bold relative uppercase  text-black border'>Lets's</h1>
      <h1 className='text-3xl font-bold relative uppercase'>Explore</h1>
      <h1 className='text-3xl font-bold relative uppercase'>Unique</h1>
      <h1 className='text-3xl font-bold relative uppercase'>Clothes</h1>
      <p className='text-xl relative p-10'>Live for Influential and Innvative fashion!</p>
      <div className='p-10'>
        <button className='bg-black text-white relative z-10 justify-center items-center p-2'>Show Now</button>
      </div>
      
      </div>
      


      </div>
      <div className='flex flex-col w-1/2'>
      <img src={Home_Img} alt="" />

      </div>

      
    </div>
  )
}

export default Home
