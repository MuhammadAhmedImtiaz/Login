import React from 'react'
import { useEffect,useState } from 'react'

const Products2 = () => {
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState([])
    const [error, seterror] = useState(null)
    const fetchData= async()=>(
        {
            setloading(true)
            try{
                let respone=await fetch("https://fakestoreapi.com/products?limit=2")
                if(!respone.ok)
                {
                    error while displaying data
                
                }
                data=json.respone()


            }
            catch(err){
                err.message("There is some error in displaying data")

            }
            finally{

            }
        

        }

    )
  return (
    <div>
        {
            Products2.map=(product)=>(
                {
                    <p>Loading......</p>
                    <img src={product.image} alt="" />
                    <h1>{product.title}</h1>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <button>Buy Now</button>

                }
            )
        }
    </div>
  )
}

export default Products2