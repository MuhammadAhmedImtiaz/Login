import React from 'react'
import br1 from '../assets/brand/br-1.png'
import br2 from '../assets/brand/br-2.png'
import br3 from '../assets/brand/br-3.png'
import br4 from '../assets/brand/br-4.png'
import br5 from '../assets/brand/br-5.png'

const Footer = () => {
  return (
    <div className='container'>
        <div className='flex bg-yellow-300 justify-center items-center'>
            <img src={br1} className=' px-9 justify-center items-center' />
            <img src={br2} className='px-9 justify-center items-center' />
            <img src={br3} className='px-9 justify-center items-center' />
            <img src={br4} className='px-9 justify-center items-center' />
            <img src={br5} className='px-9 justify-center items-center' />
        </div>

    </div>
  )
}

export default Footer