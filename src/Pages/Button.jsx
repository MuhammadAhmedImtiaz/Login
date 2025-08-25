import React from 'react'

const Button = ({text}) => {
  return (
    <div>
         <button className='text-red-500 rounded-2xl p-5 border
         border-green-700 hover:bg-red-950 hover:text-white text-xl font-bold '>{text}</button>
    </div>
  )
}

export default Button