import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import {getProductById  } from "../services/api";

const ProductDetails = () => {
    const {id} = useParams()          // URL se product ki id nikal rhe hai
 
   const [product, setProduct] = useState(null)        // ek product ka data store krne ke liye 

   useEffect(()=>{
    const fetchProduct = async()=>{
        const data = await getProductById(id)     // specific product ka data API se la rhe hai
        setProduct(data)                          // produc ko state me store kr rhe hai 
    }
    fetchProduct()
   },[id])

  return (
    <div>
        <h1>Product Details</h1>

        {/*Product data aane ke baad title show hoga */}
        {product && (
            <h2>{product.title}</h2>
        )}

        
    </div>
  )
}

export default ProductDetails

