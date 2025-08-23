import React, { useEffect } from 'react'
import { useState } from 'react'




const Products = () => {
    const [products, setproducts] = useState([])
    const [loading, setloading] = useState(false)
    const [error, seterror] = useState(null)
    const fetchProducts=async ()=>{
  
  
            setloading(true)
            seterror(null)
            try{
                const response=await fetch('https://fakestoreapi.com/products?limit=6')
                if(!response.ok)
                throw new Error("Failed to fetch products")
                const data=await response.json()
                setproducts(data)
                }
                catch(err)
                {
                    seterror(err.message)
                }
                finally{
                setloading(false)


            }   
        };
    useEffect(()=>{
  fetchProducts();
},[]) 
        
        
  return (
    <div className="container grid grid-cols-2">
      
      {loading && <p>Loading Products</p>}
      {error && <p>Error:{error}</p>}
      <div className="">
     
      {products.map(product=>(
        <div key={product.id} className='product-card rounded-xl hover:scale-105 shadow-lg px-4 py-4 gap-9    
        sm:grid-cols-1 md:grid-cols-2 '>
        <h1 className='text-xl font-bold'>{product.title}</h1>
        <img src={product.image} alt={product.title} className='h-40 object-contain'/>
        <p className='font-bold bg-red-500 '>${product.price}</p>
        <p className='bg-red-200 '>{product.description}</p>
        

        </div>

      ))}
      

    </div>
    </div>
  
    );
};

export default Products;