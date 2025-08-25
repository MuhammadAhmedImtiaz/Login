import React from 'react'
import { useState,useEffect } from 'react'
import { CiShoppingCart } from "react-icons/ci";
import { RiAccountBoxFill } from "react-icons/ri";
import { IoLogoApple } from "react-icons/io";
const ProductCard = () => {
    const [product, setproduct] = useState([])
        const [error, seterror] = useState(null)
        const [loading, setloading] = useState(false)
    const FetchData=async()=>{
        setloading(true)
        try{
            const response= await fetch('https://fakestoreapi.com/products?limit=1')
            if(!response.ok)
            {
                throw new error("There is some error while loading")
            }
            setproduct(await response.json())

        }
        catch(err){
            seterror(err.message)

        }
        finally{
            
            setloading(false)
        }

    }
    useEffect(() => {
        
          FetchData();
        }, [])
  return (
    <div>
        {
            product.map((d)=>(
                <div key={d.id}>
                <div className='flex flex-col-3  '>
                <h1 className='flex w-1/3 font-extrabold text-2xl '> < IoLogoApple/>
                <span>Apple</span></h1>

                <div className='flex w-1/3 space-x-9 justify-center items-center'>
                <button className='text-xl border-1 border-black rounded-xl p-2'><a href="">Products</a></button>
                <button className='text-xl border-1 border-black rounded-xl hover:bg-red-700 text-red-100 p-2'><a href="">Contact</a></button>
                </div>
                <div className='flex w-1/3 justify-end items-end'>
                    <CiShoppingCart className='text-5xl' />
                    <RiAccountBoxFill className='text-5xl'/>
                    </div>
                   <div className='flex '>
                     <h1>{d.title}</h1> 
                    </div>
                </div>
                </div>
            ))
        }

    </div>
  )
}

export default ProductCard