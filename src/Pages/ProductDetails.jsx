import React from 'react'
import { useState,useEffect } from 'react'
import Button from './Button'
const ProductDetails = () => {
    const [products, setproducts] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)
    const [quantity , setQuantity ] = useState(1)
    const QuantityButton=()=>{
        


    }
    const fetchData=async()=>{
        setloading(true)
        try{ 

        const response=await fetch('https://fakestoreapi.com/products?limit=1')
         
        if(!response.ok)
        
            throw new Error("Error while Fetching data")
            const data=await (response.json())
            setproducts(data)
        
    }   catch(err){
        seterror(err.message)

    }
    finally{
       
        setloading(false)
    }
}
 useEffect(() => {
     fetchData()
    }, [])
  return (
    
    <div className='container flex'>
        {
            products.map((data=>
            <div className='flex gap-4 p-9 ' >
                <img src={data.image} alt={data.description} className=' w-1/2 shadow xl '/>
            <div className=' w-1/2 text-center px-20 items-center gap-9 '>
               <h1 className='text-6xl font-bold p-9 m-9 leading-loose tracking-wide'>{data.title}</h1>
                <p className='font-bold '>${data.price}</p>
                <div className='flex flex-col  text-lg text-left gap-4 m-9'>
                <input type="checkbox" name="" id="" />
                <label className='flex items-center gap-2' for="">One-Time Purchase</label>
                <input type="checkbox" name="" id="" />
                <label className='flex items-center gap-2 ' for="">Subscribe & Save + FREE SHIPPING (Non-Refundable)</label>
                </div>
               
                <p className='m-9 text-lg'>{data.description}</p>
                <div className='flex flex-row space-x-6'>
                <Button className='flex items-center' text={"BUY "}  />
                <div className='flex gap-9 m-6 p-9 text-xl border-1 border-black '>
                
                <div className='flex items-start '>
                    <button onClick={()=>setQuantity(quantity > 1 ? quantity-1:1)}>-</button>
                    <span className='flex space-x-1.5 items-center justify-center'>{quantity}</span>
                </div>
                <div className='flex justify-end items-end space-x-3  '>
                    <button onClick={()=>setQuantity(quantity+1)}>+</button>
                </div>
                </div>
                
                </div>
                <h1 className='font-extrabold'>Get 15% OFF on your order</h1>
                </div>
                </div>
                
            ))


        }
        
    </div>
  )
}

export default ProductDetails