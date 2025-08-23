import React from 'react'
import { useEffect,useState } from 'react'

const Products2 = () => {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    const [products, setproducts] = useState([])
    const fetchData= async()=>
        {
            setloading(true)
            seterror(null)
            try{
                const respone=await fetch("https://fakestoreapi.com/products?limit=2")
                if(! respone.ok)
                {
                    throw new Error( " Error while fetching data")
                
                }
                setproducts(await respone.json())


            }
            catch(err){
                err.message("There is some error in displaying data")

            }
            finally{
                setloading(false)

            }
        

        }
        useEffect(() => {
            fetchData();

        }, [])
        

    
  return (
    <div className='container flex gap-5 '>
         {
      products.map(product => (
        <div key={product.id} className='w-1/2 shadow-sm gap-10 p-10'>
          <img src={product.image} alt="" className='h-90 ' />
          <h1 className='text-red-700 text-4xl p-8'>{product.title}</h1>
          <p className='text-red-400  p-8 font-extrabold'>${product.price}</p>
          <p className='p-3'>{product.description}</p>
          <button className='text-red-500 rounded-2xl p-5 border border-green-700 hover:bg-red-950 hover:text-white text-xl font-bold '>Buy Now</button>
        </div>
      ))                                                                                
    }
    </div>
  )
}

export default Products2