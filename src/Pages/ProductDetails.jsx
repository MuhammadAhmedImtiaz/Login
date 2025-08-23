import React from 'react'
import { useState,useEffect } from 'react'
import Button from './Products2'
const ProductDetails = () => {
    const [products, setproducts] = useState([])
    const [error, seterror] = useState(null)
    const [loading, setloading] = useState(false)
    const fetchData=async()=>{
        setloading(true)
        try{

        const response=await fetch('https://fakestoreapi.com/products?limit=6')
        if(Response.ok)
        {
            throw new Error("Error while Fetching data")
        }
    }   catch(err){
        err.message("there are some errors ")

    }
    finally{
        setproducts(products.json())
    }
    useEffect(() => {
     fetchData()
    }, [])
    
}
  return (
    
    <div>
        {
            products.map((data=>{
                <img src={data.mage} alt="" />
                <h1>{data.title}</h1>
                <p>{data.price}</p>
                <p>{data.rating}</p>
                <p>{data.description}</p>
                <Button />
                <p></p>
            ))


            }

        }
        
    </div>
  )
}

export default ProductDetails